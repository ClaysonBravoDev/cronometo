let number = 0; // Variável que armazena o número total de segundos do cronômetro
let cron; // Variável que armazenará o ID do setInterval (usado para iniciar/parar o cronômetro)
let h1 = document.getElementById('cronometro'); // Pega o elemento <h1> com id="cronometro" para exibir o tempo

// Função que formata os segundos em horas:minutos:segundos
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600); // Calcula as horas
    const mins = Math.floor((seconds % 3600) / 60); // Calcula os minutos restantes
    const secs = seconds % 60; // Calcula os segundos restantes

    // Retorna a string formatada no estilo h:mm:ss (com zero à esquerda para min e seg)
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Função para iniciar o cronômetro
function start() {
    if (!cron) { // Verifica se o cronômetro já está rodando (evita múltiplos intervalos)
        cron = setInterval(function () {
            number++; // Incrementa 1 segundo
            h1.innerText = formatTime(number); // Atualiza o texto do <h1> com o tempo formatado
        }, 1000); // Executa a cada 1000ms (1 segundo)
    }
}

// Função para parar o cronômetro
function stop() {
    clearInterval(cron); // Interrompe o setInterval
    cron = null; // Reseta a variável para poder iniciar novamente depois
}

// Função para reiniciar o cronômetro (zera)
function restart() {
    number = 0; // Zera a contagem de segundos
    h1.innerText = formatTime(number); // Atualiza o cronômetro com 0:00:00
}
