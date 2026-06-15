console.log("🤖 ¡La extensión Detector de Sorteos (Auto-Participar) se cargó!");

let ultimoSorteoDetectado = 0;

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
                const texto = node.textContent || node.innerText;

                if (texto && texto.includes('SORTEO ACTIVO')) {
                    const ahora = Date.now();
                    
                    if (ahora - ultimoSorteoDetectado > 10000) {
                        ultimoSorteoDetectado = ahora;
                        
                        const match = texto.match(/«(.*?)»/);
                        let palabraClave = "CABOVERDE"; 
                        
                        if (match && match[1]) {
                            palabraClave = match[1];
                            console.log(`🔑 Palabra clave extraída: ${palabraClave}`);
                        }

                        lanzarNotificacion(palabraClave);
                        participarEnChat(palabraClave);
                    }
                }
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });

function participarEnChat(palabra) {
    const chatInput = document.getElementById('chatInput'); 
    const botonEnviar = document.getElementById('chatSend'); 

    if (chatInput) {
        chatInput.value = palabra;
        
        chatInput.dispatchEvent(new Event('input', { bubbles: true }));
        chatInput.dispatchEvent(new Event('change', { bubbles: true }));

        console.log("📝 Texto escrito en el chat.");

        setTimeout(() => {
            if (botonEnviar) {
                botonEnviar.click();
                console.log("🚀 ¡Mensaje enviado con éxito!");
            } else {
                console.error("❌ Se encontró el input, pero no el botón de enviar.");
            }
        }, 500); 

    } else {
        console.error("❌ No se encontró la caja de texto del chat.");
    }
}

function lanzarNotificacion(palabra) {
    if (Notification.permission === 'granted') {
        new Notification('🎉 ¡SORTEO ACTIVO!', {
            body: `Participando automáticamente con: ${palabra}`,
            requireInteraction: false 
        });
    }
}