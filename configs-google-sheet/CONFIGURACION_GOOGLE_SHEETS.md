# 🚀 Configuración Final para Google Sheets

## ✅ Estado Actual
Ya tienes configurado:
- ✅ URL del Google Apps Script
- ✅ Frontend actualizado
- ✅ Formulario funcionando

## 📋 Pasos Restantes para Completar la Configuración

### 1. 🔧 Configurar el Google Apps Script

Ve a tu Google Apps Script en:
```
https://script.google.com/a/macros/wimespa.com/s/AKfycbwuSaF2SkYjEycjautBlljETjeUG-_R7-qNV4xdlh7b-MHiZmsNBZxBGbp165zTY5eayg/edit
```

Y asegúrate de que el código sea exactamente este:

```javascript
/**
 * Google Apps Script para Zero Risk AI - Formulario de Contacto
 */

// CONFIGURACIÓN: Cambia este ID por el de tu Google Sheet
const SPREADSHEET_ID = 'TU_SPREADSHEET_ID_AQUI';
const SHEET_NAME = 'Contactos';

function doPost(e) {
  try {
    // Parsear los datos recibidos
    const data = JSON.parse(e.postData.contents);
    
    // Validar campos requeridos
    if (!data.name || !data.email || !data.subject || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Faltan campos requeridos'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Guardar en Google Sheets
    const result = saveToSheet(data);
    
    if (result.success) {
      // Enviar notificación por email
      sendNotificationEmail(data);
      
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'Datos guardados correctamente'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: result.error
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    console.error('Error en doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: 'Error interno del servidor'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'API de contacto Zero Risk AI funcionando correctamente',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function saveToSheet(data) {
  try {
    // Abrir la hoja de cálculo
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Si la hoja no existe, crearla
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Agregar encabezados
      const headers = [
        'Timestamp',
        'Nombre',
        'Email',
        'Empresa',
        'Teléfono',
        'Plan de Interés',
        'Asunto',
        'Mensaje',
        'Fuente',
        'Estado'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Formatear encabezados
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
    }
    
    // Preparar los datos para insertar
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.plan || '',
      data.subject || '',
      data.message || '',
      data.source || 'Formulario Web',
      'Nuevo'
    ];
    
    // Insertar nueva fila
    sheet.appendRow(rowData);
    
    // Formatear la nueva fila
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(lastRow, 1, 1, rowData.length);
    
    // Alternar colores de fila
    if (lastRow % 2 === 0) {
      range.setBackground('#f8f9fa');
    }
    
    // Autoajustar columnas
    sheet.autoResizeColumns(1, rowData.length);
    
    return { success: true };
    
  } catch (error) {
    console.error('Error al guardar en Sheet:', error);
    return { 
      success: false, 
      error: 'Error al guardar en Google Sheets: ' + error.toString() 
    };
  }
}

function sendNotificationEmail(data) {
  try {
    // CONFIGURACIÓN: Cambia este email por el tuyo
    const NOTIFICATION_EMAIL = 'contacto@mitigariesgo.cl';
    
    const subject = `🔔 Nuevo contacto desde Zero Risk AI: ${data.subject}`;
    
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
              <td style="padding: 8px 0; color: #1e293b;">${data.company || 'No especificada'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Teléfono:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.phone || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Plan de Interés:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.plan || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Asunto:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.subject}</td>
            </tr>
          </table>
          
          <h3 style="color: #1e293b; margin-top: 25px; margin-bottom: 10px;">Mensaje:</h3>
          <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #374151; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="margin-top: 25px; padding: 15px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Fecha:</strong> ${new Date(data.timestamp).toLocaleString('es-CL')}
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
    
    // Enviar email
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });
    
    console.log('Email de notificación enviado correctamente');
    
  } catch (error) {
    console.error('Error al enviar email de notificación:', error);
  }
}

// Función de testing
function testFunction() {
  const testData = {
    name: 'Juan Pérez',
    email: 'juan@empresa.com',
    company: 'Empresa Test',
    phone: '+56912345678',
    subject: 'Consulta sobre Plan Premium',
    message: 'Estoy interesado en implementar Zero Risk AI en mi empresa.',
    plan: 'premium',
    timestamp: new Date().toISOString(),
    source: 'Test'
  };
  
  const result = saveToSheet(testData);
  console.log('Resultado del test:', result);
  
  if (result.success) {
    sendNotificationEmail(testData);
  }
}
```

### 2. 📊 Crear tu Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala "Zero Risk AI - Contactos"
4. Copia el ID de la URL:
   ```
   https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit
   ```

### 3. 🔗 Conectar Sheet con Script

1. En tu Google Apps Script, busca esta línea:
   ```javascript
   const SPREADSHEET_ID = 'TU_SPREADSHEET_ID_AQUI';
   ```
2. Reemplaza `TU_SPREADSHEET_ID_AQUI` con el ID real de tu Google Sheet

### 4. 📧 Configurar Email de Notificaciones

1. En el script, busca:
   ```javascript
   const NOTIFICATION_EMAIL = 'contacto@mitigariesgo.cl';
   ```
2. Cambia por el email donde quieres recibir las notificaciones

### 5. ✅ Probar la Configuración

1. En Google Apps Script, ejecuta la función `testFunction()`
2. Verifica que:
   - Se cree una fila de prueba en tu Google Sheet
   - Recibas un email de notificación

### 6. 🚀 ¡Listo para Usar!

Una vez completados estos pasos:
- ✅ Los mensajes del formulario se guardarán automáticamente
- ✅ Recibirás notificaciones por email
- ✅ Tendrás un registro organizado de todos los contactos

## 🔍 Verificación Final

Para verificar que todo funciona:

1. **Prueba el formulario** en tu página de contacto
2. **Revisa tu Google Sheet** - debe aparecer el mensaje
3. **Verifica tu email** - debe llegar la notificación
4. **Revisa los logs** en Google Apps Script si hay errores

## 📞 ¿Necesitas Ayuda?

Si tienes problemas con la configuración:
- Revisa los logs en Google Apps Script
- Verifica que el SPREADSHEET_ID sea correcto
- Asegúrate de que el email de notificaciones sea válido
- Confirma que los permisos estén configurados correctamente

¡Tu sistema de contacto está casi listo! 🎉