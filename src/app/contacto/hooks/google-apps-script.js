/**
 * Google Apps Script para recibir datos del formulario de contacto
 * y guardarlos en Google Sheets - VERSIÓN CORREGIDA
 */

// CONFIGURACIÓN: Cambia este ID por el de tu Google Sheet
const SPREADSHEET_ID = "152PmsxYBy19qKrYXyXAmOTVCMQihg44eDHZHjnDNPio";
const SHEET_NAME = "Contactos"; // Nombre de la hoja

/**
 * Formatea fecha a formato legible en español chileno
 * ESTA FUNCIÓN DEBE ESTAR ANTES DE saveToSheet()
 */
/**
 * Formatea fecha a formato legible en español chileno
 */
function formatearFecha(timestamp) {
  console.log("=== FORMATEAR FECHA ===");
  console.log("Timestamp recibido:", timestamp);
  console.log("Tipo:", typeof timestamp);

  let fecha;

  if (timestamp) {
    fecha = new Date(timestamp);
    console.log("Fecha parseada:", fecha);
  } else {
    fecha = new Date();
    console.log("Usando fecha actual:", fecha);
  }

  // Verificar que la fecha sea válida
  if (isNaN(fecha.getTime())) {
    console.log("Fecha inválida, usando fecha actual");
    fecha = new Date();
  }

  const fechaFormateada = fecha.toLocaleString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Santiago",
  });

  console.log("Fecha formateada final:", fechaFormateada);
  console.log("=== FIN FORMATEAR FECHA ===");

  return fechaFormateada;
}

/**
 * Maneja peticiones OPTIONS para CORS
 */
function doOptions(e) {
  const output = ContentService.createTextOutput().setMimeType(
    ContentService.MimeType.TEXT
  );

  try {
    output.setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    });
  } catch (error) {
    // Headers no disponibles en entorno de testing
  }

  return output;
}

/**
 * Función principal que maneja las peticiones POST desde el frontend
 */
function doPost(e) {
  try {
    // Headers CORS para Google Workspace
    const output = ContentService.createTextOutput();

    // Configurar headers CORS (solo en entorno web real)
    try {
      output.setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      });
    } catch (headerError) {
      // Headers no disponibles en entorno de testing
    }

    // Verificar que existe la petición
    if (!e) {
      return output
        .setContent(
          JSON.stringify({
            success: false,
            error: "No se recibió la petición POST correctamente",
            timestamp: new Date().toISOString(),
          })
        )
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Verificar que existen datos POST
    if (!e.postData || !e.postData.contents) {
      return output
        .setContent(
          JSON.stringify({
            success: false,
            error: "No se encontraron datos POST",
            timestamp: new Date().toISOString(),
          })
        )
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Parsear los datos JSON
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return output
        .setContent(
          JSON.stringify({
            success: false,
            error: "Error al parsear JSON: " + parseError.toString(),
            timestamp: new Date().toISOString(),
          })
        )
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Validar campos requeridos
    if (!data.name || !data.email || !data.subject || !data.message) {
      return output
        .setContent(
          JSON.stringify({
            success: false,
            error: "Faltan campos requeridos: name, email, subject, message",
            timestamp: new Date().toISOString(),
          })
        )
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Guardar datos en Google Sheets
    const result = saveToSheet(data);

    if (result.success) {
      logDebug("INFO", "Datos guardados exitosamente en Sheet", {
        name: data.name,
        email: data.email,
        company: data.company,
      });

      // Intentar enviar email con debugging más detallado
      logDebug("INFO", "=== INICIANDO PROCESO EMAIL ===");
      try {
        logDebug("INFO", "Llamando a sendNotificationEmail...");
        sendNotificationEmail(data);
        logDebug("SUCCESS", "sendNotificationEmail completado sin errores");
      } catch (emailError) {
        logDebug("ERROR", "ERROR CAPTURADO en sendNotificationEmail", {
          error: emailError.message,
          name: emailError.name,
          stack: emailError.stack
            ? emailError.stack.substring(0, 500)
            : "No stack",
        });

        // También intentar un email simple para verificar permisos
        try {
          logDebug("INFO", "Intentando email simple de test...");
          MailApp.sendEmail(
            "fcastro@wimespa.com",
            "Test Simple",
            "Test desde frontend"
          );
          logDebug("SUCCESS", "Email simple funcionó");
        } catch (simpleEmailError) {
          logDebug("ERROR", "Email simple también falló", {
            error: simpleEmailError.message,
          });
        }
      }
      logDebug("INFO", "=== FIN PROCESO EMAIL ===");

      return output
        .setContent(
          JSON.stringify({
            success: true,
            message: "Datos guardados correctamente",
            timestamp: new Date().toISOString(),
          })
        )
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      return output
        .setContent(
          JSON.stringify({
            success: false,
            error: result.error,
            timestamp: new Date().toISOString(),
          })
        )
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor: " + error.toString(),
        timestamp: new Date().toISOString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función para manejar peticiones GET (para testing)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "API de contacto Zero Risk AI funcionando correctamente",
      timestamp: new Date().toISOString(),
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Guarda los datos del formulario en Google Sheets
 */
function saveToSheet(data) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // LOG PARA DEBUG - Insertar en hoja Debug lo que vamos a guardar
    try {
      let debugSheet =
        spreadsheet.getSheetByName("Debug") || spreadsheet.insertSheet("Debug");
      if (debugSheet.getLastRow() === 0) {
        debugSheet
          .getRange(1, 1, 1, 3)
          .setValues([["Timestamp", "Evento", "Datos"]]);
      }
      debugSheet.appendRow([
        new Date().toISOString(),
        "ANTES DE INSERTAR",
        JSON.stringify(data),
      ]);
    } catch (debugError) {
      // Ignorar errores de debug
    }

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);

      const headers = [
        "Fecha",
        "Estado",
        "Nombre",
        "Email",
        "Empresa",
        "Teléfono",
        "Plan de Interés",
        "Asunto",
        "Mensaje",
        "Fuente",
      ];

      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
    }

    // Formatear fecha
    let fechaFormateada;
    try {
      if (data.timestamp) {
        const fecha = new Date(data.timestamp);
        if (!isNaN(fecha.getTime())) {
          fechaFormateada = fecha.toLocaleString("es-CL", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "America/Santiago",
          });
        } else {
          fechaFormateada = new Date().toLocaleString("es-CL");
        }
      } else {
        fechaFormateada = new Date().toLocaleString("es-CL");
      }
    } catch (error) {
      fechaFormateada = new Date().toLocaleString("es-CL");
    }

    // CREAR ARRAY ELEMENTO POR ELEMENTO - MÁS EXPLÍCITO
    const elemento0 = fechaFormateada;
    const elemento1 = "Sin atención"; // FORZADO EXPLÍCITAMENTE
    const elemento2 = data.name || "";
    const elemento3 = data.email || "";
    const elemento4 = data.company || "";
    const elemento5 = data.phone || "";
    const elemento6 = data.plan || "";
    const elemento7 = data.subject || "";
    const elemento8 = data.message || "";
    const elemento9 = data.source || "Formulario Web";

    const rowData = [
      elemento0, // Fecha
      elemento1, // Estado = "Sin atención"
      elemento2, // Nombre
      elemento3, // Email
      elemento4, // Empresa
      elemento5, // Teléfono
      elemento6, // Plan
      elemento7, // Asunto
      elemento8, // Mensaje
      elemento9, // Fuente
    ];

    // LOG PARA DEBUG - Insertar en hoja Debug lo que vamos a insertar
    try {
      let debugSheet = spreadsheet.getSheetByName("Debug");
      debugSheet.appendRow([
        new Date().toISOString(),
        "ARRAY A INSERTAR",
        JSON.stringify(rowData),
      ]);
    } catch (debugError) {
      // Ignorar errores de debug
    }

    // Insertar fila
    sheet.appendRow(rowData);

    // LOG PARA DEBUG - Verificar qué se insertó realmente
    try {
      let debugSheet = spreadsheet.getSheetByName("Debug");
      const lastRow = sheet.getLastRow();
      const insertedData = sheet.getRange(lastRow, 1, 1, 10).getValues()[0];
      debugSheet.appendRow([
        new Date().toISOString(),
        "DATOS INSERTADOS REALMENTE",
        JSON.stringify(insertedData),
      ]);
    } catch (debugError) {
      // Ignorar errores de debug
    }

    // Formatear
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(lastRow, 1, 1, rowData.length);
    if (lastRow % 2 === 0) {
      range.setBackground("#f8f9fa");
    }
    sheet.autoResizeColumns(1, rowData.length);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Error al guardar en Google Sheets: " + error.toString(),
    };
  }
}

/**
 * Envía notificación por email cuando se recibe un nuevo contacto
 */
function sendNotificationEmail(data) {
  try {
    // Configuración de emails de notificación
    const NOTIFICATION_EMAIL = [
      "fcastro@wimespa.com",
      "v.figueroa@wimespa.com",
      "luisbugueno@wimespa.com",
    ];

    // Verificar cuota de email disponible
    logDebug("INFO", "Verificando cuota de email");
    const quota = MailApp.getRemainingDailyQuota();
    logDebug("INFO", "Cuota de email verificada", { quota: quota });

    if (quota < 1) {
      logDebug("ERROR", "Sin cuota de email disponible", { quota: quota });
      throw new Error("Sin cuota de email disponible");
    }

    // Preparar asunto del email
    const subject = `🔔 Nuevo contacto desde Zero Risk AI: ${data.subject}`;

    // Usar fecha formateada también en el email
    const fechaFormateada = formatearFecha(data.timestamp);

    // Crear el cuerpo del email en HTML
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Zero Risk AI</h1>
          <p style="color: #e0e7ff; margin: 5px 0 0 0;">Nuevo mensaje de contacto</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-left: 4px solid #667eea;">
          <h2 style="color: #1e293b; margin-top: 0;">Información del Contacto</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Nombre:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Empresa:</td>
              <td style="padding: 8px 0; color: #1e293b;">${
                data.company || "No especificada"
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Teléfono:</td>
              <td style="padding: 8px 0; color: #1e293b;">${
                data.phone || "No especificado"
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Plan de Interés:</td>
              <td style="padding: 8px 0; color: #1e293b;">${
                data.plan || "No especificado"
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Asunto:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.subject}</td>
            </tr>
          </table>
          
          <h3 style="color: #1e293b; margin-top: 25px; margin-bottom: 10px;">Mensaje:</h3>
          <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #374151; line-height: 1.6;">${
              data.message
            }</p>
          </div>
          
          <div style="margin-top: 25px; padding: 15px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Fecha:</strong> ${fechaFormateada}
            </p>
          </div>
        </div>
        
        <div style="background: #1e293b; padding: 20px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de Zero Risk AI
          </p>
        </div>
      </div>
    `;

    // Enviar email a todos los destinatarios
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL.join(","),
      subject: subject,
      htmlBody: htmlBody,
    });

    logDebug("SUCCESS", "Email de notificación enviado correctamente", {
      recipients: NOTIFICATION_EMAIL.length,
    });
  } catch (error) {
    logDebug("ERROR", "Error al enviar email de notificación", {
      error: error.message,
    });
    // Re-lanzar el error para que se maneje en doPost
    throw error;
  }
}

/**
 * Sistema de logging para debugging (escribe en hoja "Debug")
 */
function logDebug(level, message, data = null) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let debugSheet = ss.getSheetByName("Debug") || ss.insertSheet("Debug");

    // Crear headers si no existen
    if (debugSheet.getLastRow() === 0) {
      debugSheet
        .getRange(1, 1, 1, 5)
        .setValues([["Timestamp", "Level", "Message", "Data", "Source"]]);
      debugSheet
        .getRange(1, 1, 1, 5)
        .setBackground("#4285f4")
        .setFontColor("#ffffff")
        .setFontWeight("bold");
    }

    // Agregar nueva fila de log
    debugSheet.appendRow([
      new Date().toISOString(),
      level,
      message,
      data ? JSON.stringify(data) : "",
      "Frontend",
    ]);

    // Mantener solo últimas 100 filas para no llenar la hoja
    if (debugSheet.getLastRow() > 101) {
      debugSheet.deleteRow(2);
    }
  } catch (error) {
    // Si falla el log, no hacer nada para evitar loops infinitos
  }
}

/**
 * Función de autorización de permisos
 * EJECUTA ESTA FUNCIÓN UNA VEZ en el editor para autorizar permisos
 */
function autorizarPermisos() {
  try {
    // Autorizar permisos de Google Sheets
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log("✅ Permisos Sheets OK - Spreadsheet:", spreadsheet.getName());

    // Autorizar permisos de Gmail
    const emailQuota = MailApp.getRemainingDailyQuota();
    console.log("✅ Permisos Gmail OK - Cuota restante:", emailQuota);

    // Test de escritura
    const testSheet =
      spreadsheet.getSheetByName(SHEET_NAME) ||
      spreadsheet.insertSheet(SHEET_NAME);
    testSheet.getRange("A1").setValue("Test " + new Date());
    console.log("✅ Permisos de escritura OK");

    return {
      success: true,
      message: "Todos los permisos autorizados correctamente",
    };
  } catch (error) {
    console.error("❌ Error de autorización:", error);
    return {
      success: false,
      error: error.toString(),
    };
  }
}

/**
 * Función de test para probar el sistema completo
 */
function testFunction() {
  console.log("=== INICIANDO TEST COMPLETO ===");

  // Datos de prueba
  const testData = {
    name: "Juan Pérez Test",
    email: "juan@empresa.com",
    company: "Empresa Test",
    phone: "+56912345678",
    subject: "Consulta sobre Plan Premium",
    message: "Estoy interesado en implementar Zero Risk AI en mi empresa.",
    plan: "premium",
    timestamp: new Date().toISOString(),
    source: "Test Manual",
  };

  // Test 1: Guardar en Sheet
  console.log("1. Probando guardado en Sheet...");
  const result = saveToSheet(testData);
  console.log("Resultado saveToSheet:", result);

  // Test 2: Enviar email (solo si Sheet funcionó)
  if (result.success) {
    console.log("2. Probando envío de email...");
    try {
      sendNotificationEmail(testData);
      console.log("✅ Email enviado exitosamente");
    } catch (emailError) {
      console.error("❌ Error enviando email:", emailError);
    }
  }

  console.log("=== TEST COMPLETADO ===");
  return result;
}

function testFormateoFecha() {
  console.log("=== TEST FORMATEO FECHA ===");

  // Test 1: Con timestamp ISO
  const isoTimestamp = "2025-07-01T20:21:19.895Z";
  console.log("Test 1 - Timestamp ISO:");
  const fecha1 = formatearFecha(isoTimestamp);
  console.log("Resultado:", fecha1);

  // Test 2: Sin timestamp
  console.log("\nTest 2 - Sin timestamp:");
  const fecha2 = formatearFecha(null);
  console.log("Resultado:", fecha2);

  // Test 3: Simulación de datos del frontend
  const dataFrontend = {
    name: "Test Frontend",
    email: "test@test.com",
    timestamp: "2025-07-01T20:21:19.895Z",
    subject: "Test",
    message: "Mensaje test",
  };

  console.log("\nTest 3 - Datos frontend completos:");
  const result = saveToSheet(dataFrontend);
  console.log("Resultado saveToSheet:", result);
}

function testConDatosRealesFrontend() {
  console.log("=== TEST CON DATOS REALES FRONTEND ===");

  // Datos EXACTOS que envía tu frontend
  const datosRealesFrontend = {
    name: "ANDRES",
    email: "felipe.castro3@mail.udp.cl",
    company: "udp",
    phone: "+56965004665",
    subject: "Test",
    message: "asdsdfdafghfds",
    plan: "consulta",
    timestamp: "2025-07-01T20:44:57.325Z",
    source: "Página de Contacto - Zero Risk AI",
  };

  console.log(
    "Datos frontend reales:",
    JSON.stringify(datosRealesFrontend, null, 2)
  );

  // Test solo el formateo de fecha
  console.log("=== TEST FORMATEO FECHA FRONTEND ===");
  const fechaFormateada = formatearFecha(datosRealesFrontend.timestamp);
  console.log("Fecha original:", datosRealesFrontend.timestamp);
  console.log("Fecha formateada:", fechaFormateada);

  // Test completo saveToSheet
  console.log("=== TEST SAVETOSHEET CON DATOS FRONTEND ===");
  const result = saveToSheet(datosRealesFrontend);
  console.log("Resultado saveToSheet:", result);

  return result;
}

function testSoloFormateo() {
  console.log("=== TEST SOLO FORMATEO ===");

  const timestampFrontend = "2025-07-01T20:44:57.325Z";

  try {
    const fecha = new Date(timestampFrontend);
    console.log("Fecha parseada:", fecha);
    console.log("¿Es válida?:", !isNaN(fecha.getTime()));

    const formateada = fecha.toLocaleString("es-CL", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Santiago",
    });

    console.log("Fecha formateada:", formateada);
    return formateada;
  } catch (error) {
    console.error("Error:", error);
    return "ERROR";
  }
}

function verificarEstructuraHoja() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (sheet) {
      const headers = sheet.getRange(1, 1, 1, 10).getValues()[0];
      console.log("Headers actuales en la hoja:", headers);

      const headersEsperados = [
        "Fecha",
        "Estado",
        "Nombre",
        "Email",
        "Empresa",
        "Teléfono",
        "Plan de Interés",
        "Asunto",
        "Mensaje",
        "Fuente",
      ];

      console.log("Headers esperados:", headersEsperados);

      for (let i = 0; i < headersEsperados.length; i++) {
        if (headers[i] !== headersEsperados[i]) {
          console.error(
            `❌ Mismatch en posición ${i}: esperado "${headersEsperados[i]}", actual "${headers[i]}"`
          );
        } else {
          console.log(`✅ Posición ${i}: "${headers[i]}" OK`);
        }
      }
    } else {
      console.log("La hoja no existe aún");
    }
  } catch (error) {
    console.error("Error verificando estructura:", error);
  }
}

function testDoPostCompleto() {
  console.log("=== TEST doPost COMPLETO ===");

  const mockE = {
    postData: {
      contents: JSON.stringify({
        name: "TEST DOPOST",
        email: "test@test.com",
        company: "Test Company",
        phone: "+56912345678",
        subject: "Test doPost Completo",
        message: "Test completo de doPost",
        plan: "premium",
        timestamp: "2025-07-01T20:44:57.325Z",
        source: "Test doPost Completo",
      }),
      type: "application/json",
    },
    parameter: {},
    headers: {},
  };

  console.log("Llamando a doPost...");
  const result = doPost(mockE);
  console.log("Resultado:", result.getContent());

  return result;
}

function sendNotificationEmailSimple(data) {
  try {
    logDebug("INFO", "=== INICIO sendNotificationEmailSimple ===");

    // Solo enviar a UN email para empezar
    const EMAIL_TEST = "fcastro@wimespa.com";

    logDebug("INFO", "Verificando cuota...");
    const quota = MailApp.getRemainingDailyQuota();
    logDebug("INFO", "Cuota disponible", { quota: quota });

    if (quota < 1) {
      throw new Error("Sin cuota de email");
    }

    logDebug("INFO", "Preparando email simple...");
    const subject = `Nuevo contacto: ${data.subject}`;
    const body = `
Nuevo contacto recibido:

Nombre: ${data.name}
Email: ${data.email}
Empresa: ${data.company}
Mensaje: ${data.message}

Enviado desde: ${data.source}
    `;

    logDebug("INFO", "Enviando email...", { to: EMAIL_TEST, subject: subject });

    MailApp.sendEmail(EMAIL_TEST, subject, body);

    logDebug("SUCCESS", "Email simple enviado correctamente");
  } catch (error) {
    logDebug("ERROR", "Error en sendNotificationEmailSimple", {
      error: error.message,
      name: error.name,
      stack: error.stack ? error.stack.substring(0, 300) : "No stack",
    });
    throw error;
  }
}

function testPermisosDesdeWeb() {
  try {
    logDebug("INFO", "=== TEST PERMISOS DESDE WEB ===");

    // Test 1: Cuota
    logDebug("INFO", "Test 1: Verificando cuota...");
    const quota = MailApp.getRemainingDailyQuota();
    logDebug("INFO", "Cuota obtenida", { quota: quota });

    // Test 2: Email simple
    logDebug("INFO", "Test 2: Enviando email de prueba...");
    MailApp.sendEmail(
      "fcastro@wimespa.com",
      "Test Permisos Web",
      "Este email verifica permisos desde web"
    );
    logDebug("SUCCESS", "Email de prueba enviado");

    return { success: true };
  } catch (error) {
    logDebug("ERROR", "Error en test de permisos", {
      error: error.message,
      name: error.name,
    });
    return { success: false, error: error.message };
  }
}
