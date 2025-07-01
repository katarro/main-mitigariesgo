# 📧 Configuración de Múltiples Emails de Notificación

## ✅ Configuración Actual
Ya tienes el array iniciado:
```javascript
const NOTIFICATION_EMAIL = ["fcastro@wimespa.com", ""];
```

## 🔧 Configuración Completa para 3 Emails

Actualiza tu función `sendNotificationEmail` en Google Apps Script:

```javascript
function sendNotificationEmail(data) {
  try {
    // CONFIGURACIÓN: Agrega los 3 emails aquí
    const NOTIFICATION_EMAILS = [
      "fcastro@wimespa.com",
      "contacto@mitigariesgo.cl", 
      "ventas@mitigariesgo.cl"  // Agrega el tercer email aquí
    ];

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
              <strong>Fecha:</strong> ${new Date(data.timestamp).toLocaleString(
                "es-CL"
              )}
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

    // MÉTODO 1: Enviar a todos los emails en una sola llamada (recomendado)
    MailApp.sendEmail({
      to: NOTIFICATION_EMAILS.join(','), // Convierte el array a string separado por comas
      subject: subject,
      htmlBody: htmlBody,
    });

    console.log(`Email de notificación enviado a: ${NOTIFICATION_EMAILS.join(', ')}`);

  } catch (error) {
    console.error("Error al enviar email de notificación:", error);
    // No lanzamos error aquí para que no afecte el guardado principal
  }
}
```

## 🔄 Método Alternativo (Envío Individual)

Si prefieres enviar emails individuales (útil para personalización):

```javascript
function sendNotificationEmail(data) {
  try {
    const NOTIFICATION_EMAILS = [
      "fcastro@wimespa.com",
      "contacto@mitigariesgo.cl", 
      "ventas@mitigariesgo.cl"
    ];

    const subject = `🔔 Nuevo contacto desde Zero Risk AI: ${data.subject}`;
    const htmlBody = `...`; // El mismo HTML de arriba

    // Enviar a cada email individualmente
    NOTIFICATION_EMAILS.forEach((email, index) => {
      try {
        MailApp.sendEmail({
          to: email,
          subject: subject,
          htmlBody: htmlBody,
        });
        console.log(`Email ${index + 1} enviado a: ${email}`);
      } catch (emailError) {
        console.error(`Error enviando email a ${email}:`, emailError);
      }
    });

    console.log(`Notificaciones enviadas a ${NOTIFICATION_EMAILS.length} destinatarios`);

  } catch (error) {
    console.error("Error general al enviar emails:", error);
  }
}
```

## ✅ Ventajas de Cada Método

### Método 1 (Recomendado):
- ✅ **Más eficiente** - Una sola llamada a la API
- ✅ **Menos cuota de email** utilizada
- ✅ **Más rápido** de ejecutar
- ✅ **Todos reciben el mismo email** al mismo tiempo

### Método 2 (Alternativo):
- ✅ **Control individual** por email
- ✅ **Manejo de errores** específico por destinatario
- ✅ **Posibilidad de personalizar** cada email
- ❌ **Más lento** y usa más cuota

## 🔧 Configuración Recomendada

Para tu caso, te recomiendo usar el **Método 1** con esta configuración:

```javascript
const NOTIFICATION_EMAILS = [
  "fcastro@wimespa.com",        // Email principal
  "contacto@mitigariesgo.cl",   // Email de contacto general
  "ventas@mitigariesgo.cl"      // Email del equipo de ventas
];
```

## 📊 Límites de Google Apps Script

Ten en cuenta estos límites:
- **100 emails por día** (cuenta gratuita)
- **1,500 emails por día** (Google Workspace)
- **Máximo 50 destinatarios** por email

## 🧪 Testing

Para probar que funciona con múltiples emails:

1. Actualiza la función en Google Apps Script
2. Ejecuta `testFunction()`
3. Verifica que los 3 emails reciban la notificación

## ✨ ¡Listo!

Con esta configuración:
- ✅ **3 personas** recibirán cada notificación
- ✅ **Mismo formato** profesional para todos
- ✅ **Entrega simultánea** de emails
- ✅ **Logs detallados** para debugging

¿Quieres que agregue algún email específico o necesitas alguna personalización adicional?