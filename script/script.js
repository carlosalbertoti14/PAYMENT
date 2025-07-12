// Função para copiar a chave Pix
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
                setTimeout(() => {
                    messageElement.style.visibility = "hidden";
                }, 300); // tempo da transição de opacidade (deve ser o mesmo no CSS se houver)
            }, 2000); // 2 segundos antes de começar a desaparecer
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

// ... (seu código existente para a função copyPixKey) ...

document.addEventListener('DOMContentLoaded', () => {
    // ... (sua lógica existente para inicializar mensagens de cópia, se houver) ...

    // Lógica para o botão "Voltar e Fechar"
    const backAndCloseButton = document.getElementById('backAndCloseButton');

    if (backAndCloseButton) { // Verifica se o botão existe antes de adicionar o listener
        backAndCloseButton.addEventListener('click', () => {
            // Tenta voltar para a página anterior no histórico
            window.history.back();

            // Adiciona um pequeno atraso antes de tentar fechar a janela
            // Isso pode dar tempo para a navegação de retorno iniciar,
            // mas o sucesso do window.close() ainda depende de como a janela foi aberta.
            setTimeout(() => {
                try {
                    window.close();
                } catch (e) {
                    console.error('Erro ao tentar fechar a janela. Permissão negada ou não aberta via script:', e);
                    // Opcional: Você pode alertar o usuário ou mostrar uma mensagem alternativa aqui.
                    // alert('Não foi possível fechar esta janela automaticamente. Por favor, feche-a manualmente.');
                }
            }, 100); // 100 milissegundos de atraso
        });
    }
});