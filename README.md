# Detector de Sorteos (Auto-Participar) 🤖🎉

Esta es una extensión para navegadores basados en Chromium (Chrome, Brave, Edge, etc.) diseñada para detectar automáticamente sorteos activos en **[agusbobtracker.live](https://agusbobtracker.live/)**, extraer la palabra clave y participar en el chat de forma automática.

## Características

- 🔎 **Detección Automática**: Monitorea el sitio web en tiempo real para encontrar el mensaje de **"SORTEO ACTIVO"**.
- 🔑 **Extracción de Palabra Clave**: Obtiene la palabra clave que esté entre comillas angulares (`«palabra»`). Si no encuentra una, utiliza una por defecto (`CABOVERDE`).
- 💬 **Auto-Participación**: Escribe de forma automática la palabra clave en la caja del chat (`#chatInput`) y hace clic en enviar (`#chatSend`) tras 500 milisegundos.
- 🔔 **Notificaciones de Escritorio**: Te envía una alerta al sistema operativo cada vez que se detecta un sorteo y se participa en él (requiere otorgar permisos de notificación).

---

## 🛠️ Instrucciones de Instalación

Sigue estos sencillos pasos para instalar la extensión de manera local en tu navegador:

### Paso 1: Descargar el proyecto
Si no lo has hecho ya, descarga este proyecto a tu computadora:
- Si tienes Git instalado, clónalo:
  ```bash
  git clone https://github.com/saos1739/fert-ext.git
  ```
- O simplemente descarga el repositorio en formato `.zip` desde GitHub y extráelo en una carpeta de tu preferencia.

### Paso 2: Abrir la sección de Extensiones
1. Abre tu navegador (Google Chrome, Brave, Opera, Microsoft Edge, etc.).
2. En la barra de direcciones, escribe la ruta correspondiente y presiona Enter:
   - **Chrome**: `chrome://extensions/`
   - **Brave**: `brave://extensions/`
   - **Edge**: `edge://extensions/`
3. También puedes acceder desde el menú del navegador -> **Extensiones** -> **Gestionar extensiones**.

### Paso 3: Activar el Modo de Desarrollador
En la esquina superior derecha de la página de extensiones, activa la opción que dice **Modo de desarrollador** (Developer mode).

### Paso 4: Cargar la extensión
1. En la parte superior izquierda, haz clic en el botón **Cargar descomprimida** (Load unpacked).
2. Se abrirá un explorador de archivos. Selecciona la carpeta raíz del proyecto (la carpeta donde se encuentran los archivos `manifest.json` y `content.js`).
3. ¡Listo! La extensión "Detector de Sorteos" aparecerá activa en tu lista de extensiones.

---

## ⚙️ Uso y Configuración

1. Entra a **[agusbobtracker.live](https://agusbobtracker.live/)**.
2. Asegúrate de otorgar permisos de notificación si el navegador te lo solicita (para poder recibir las alertas de sorteos en tu escritorio).
3. Mantén la consola de desarrollador abierta (`F12` -> pestaña **Consola**) para ver los registros en tiempo real:
   - 🤖 *¡La extensión Detector de Sorteos (Auto-Participar) se cargó!*
   - 🔑 *Palabra clave extraída: [palabra]*
   - 🚀 *¡Mensaje enviado con éxito!*

---

## 📝 Notas técnicas
La extensión está desarrollada en **JavaScript** y utiliza la API de Chrome Extensions (**Manifest V3**). Emplea un `MutationObserver` para escuchar de forma eficiente cualquier cambio en el DOM de la página sin afectar el rendimiento del navegador.
