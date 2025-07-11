    //script/script.js

    
    function copyPixKey(keyId, messageId) {
            const pixKeyElement = document.getElementById(keyId);
            const pixKey = pixKeyElement.textContent;
            const messageElement = document.getElementById(messageId);

            navigator.clipboard.writeText(pixKey)
                .then(() => {
                    messageElement.textContent = "Chave copiada!";
                    messageElement.style.color = "green";
                    messageElement.style.visibility = "visible";
                    messageElement.style.opacity = "1";
                    setTimeout(() => {
                        messageElement.style.opacity = "0";
                        // Importante: esconde a mensagem *depois* da transição de opacidade
                        setTimeout(() => {
                            messageElement.style.visibility = "hidden";
                        }, 300); // tempo da transição de opacidade
                    }, 2000); 
                })
                .catch(err => {
                    messageElement.textContent = "Erro ao copiar. Tente novamente.";
                    messageElement.style.color = "red";
                    messageElement.style.visibility = "visible";
                    messageElement.style.opacity = "1";
                    setTimeout(() => {
                        messageElement.style.opacity = "0";
                        setTimeout(() => {
                            messageElement.style.visibility = "hidden";
                        }, 300);
                    }, 2000);
                    console.error('Falha ao copiar:', err);
                });
        }