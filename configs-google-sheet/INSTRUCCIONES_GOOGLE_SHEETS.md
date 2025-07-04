# 📊 Configuración de Google Sheets para Formulario de Contacto

## 🚀 Pasos para Configurar la Integración

### 1. Crear Google Sheet
1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala "Zero Risk AI - Contactos"
4. Copia el ID de la hoja desde la URL:
   ```
   https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit
   ```

### 2. Configurar Google Apps Script
1. Ve a [Google Apps Script](https://script.google.com)
2. Crea un nuevo proyecto
3. Nómbralo "Zero Risk AI Contact Form"
4. Borra el código por defecto
5. Pega el código del archivo `google-apps-script.js`
6. **IMPORTANTE**: Cambia `TU_SPREADSHEET_ID_AQUI` por el ID real de tu Google Sheet

### 3. Configurar Permisos
1. En Google Apps Script, ve a "Configuración" (⚙️)
2. Marca "Mostrar el archivo de manifiesto 'appsscript.json'"
3. Guarda el proyecto (Ctrl+S)

### 4. Desplegar como Web App
1. Haz clic en "Desplegar" → "Nueva implementación"
2. Selecciona tipo: "Aplicación web"
3. Configuración:
   - **Ejecutar como**: Tu cuenta
   - **Quién tiene acceso**: Cualquiera
4. Haz clic en "Desplegar"
5. **Copia la URL del Web App** (la necesitarás para el frontend)

### 5. Actualizar el Frontend
1. En el archivo `src/app/contacto/page.tsx`
2. Busca la línea:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. Reemplaza `YOUR_SCRIPT_ID` con la URL completa que copiaste en el paso anterior

### 6. Configurar Email de Notificaciones (Opcional)
1. En el archivo `google-apps-script.js`
2. Busca la línea:
   ```javascript
   const NOTIFICATION_EMAIL = 'contacto@mitigariesgo.cl';
   ```
3. Cambia por tu email real

## 📋 Estructura de la Hoja de Cálculo

La hoja se creará automáticamente con estas columnas:

| Columna | Descripción |
|---------|-------------|
| Timestamp | Fecha y hora del envío |
| Nombre | Nombre completo del contacto |
| Email | Email corporativo |
| Empresa | Nombre de la empresa |
| Teléfono | Número de teléfono |
| Plan de Interés | Plan seleccionado |
| Asunto | Asunto del mensaje |
| Mensaje | Contenido del mensaje |
| Fuente | Origen del contacto |
| Estado | Estado del lead (Nuevo, Contactado, etc.) |

## 🔧 Funcionalidades Incluidas

### ✅ Guardado Automático
- Todos los mensajes se guardan automáticamente
- Formato consistente y organizado
- Validación de campos requeridos

### ✅ Notificaciones por Email
- Email automático cuando llega un nuevo contacto
- Formato HTML profesional
- Incluye toda la información del contacto

### ✅ Manejo de Errores
- Validación de datos en el backend
- Mensajes de error claros en el frontend
- Logs detallados para debugging

### ✅ Seguridad
- Validación de campos requeridos
- Sanitización de datos
- Manejo seguro de errores

## 🧪 Testing

Para probar la configuración:

1. En Google Apps Script, ejecuta la función `testFunction()`
2. Verifica que se cree una fila de prueba en tu Google Sheet
3. Verifica que recibas el email de notificación

## 🔍 Troubleshooting

### Error: "Script function not found"
- Asegúrate de haber guardado el script
- Verifica que el nombre de la función sea correcto

### Error: "Permission denied"
- Revisa los permisos del Web App
- Asegúrate de que esté configurado como "Cualquiera" puede acceder

### No se reciben emails
- Verifica que el email en `NOTIFICATION_EMAIL` sea correcto
- Revisa la carpeta de spam
- Verifica los permisos de Gmail en Google Apps Script

### Los datos no se guardan
- Verifica que el `SPREADSHEET_ID` sea correcto
- Asegúrate de que tengas permisos de edición en la hoja
- Revisa los logs en Google Apps Script

## 📈 Análisis de Datos

Una vez configurado, podrás:

- **Filtrar contactos** por plan de interés
- **Analizar tendencias** de consultas
- **Gestionar leads** cambiando el estado
- **Exportar datos** para CRM
- **Crear reportes** automáticos

## 🔒 Consideraciones de Privacidad

- Los datos se almacenan en tu Google Drive personal
- Solo tú tienes acceso a la información
- Cumple con regulaciones de privacidad
- Los emails se envían desde tu cuenta Gmail

---

¡Listo! Tu formulario de contacto ahora está completamente integrado con Google Sheets. 🎉