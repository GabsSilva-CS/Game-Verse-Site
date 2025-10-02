// Lista fake inicial de jogadores
const jogadores = [
    {
        nome: "Lucas",
        jogo: "Call of Duty",
        plataforma: "PC",
        genero: "Tiro",
        nickname: "SniperLucas"
    },
    {
        nome: "Ana",
        jogo: "The Legend of Zelda",
        plataforma: "Nintendo",
        genero: "Aventura",
        nickname: "ZeldaQueen"
    },
    {
        nome: "Carlos",
        jogo: "FIFA 24",
        plataforma: "PlayStation",
        genero: "Esporte",
        nickname: "Fifador"
    },
    {
        nome: "Mariana",
        jogo: "Minecraft",
        plataforma: "PC",
        genero: "Simulação",
        nickname: "CraftyMari"
    },
    {
        nome: "Pedro",
        jogo: "Fortnite",
        plataforma: "Xbox",
        genero: "Batalha Real",
        nickname: "FortnitePro"
    },
    {
      nome:"Gabriel",
      jogo:"Call Of Duty Warzone",
      plataforma:"Playstation",
      genero:"Tiro",
      nickname:"biel_ssilva18",
    },

];

// Função para renderizar a lista de jogadores
function renderizarJogadores() {
    const lista = document.querySelector("#Lista-de-jogadores ul#playerList");
    lista.innerHTML = ""; // Limpa a lista antes de renderizar novamente

    jogadores.forEach((jogador, index) => {
        const item = document.createElement("li");
        item.innerHTML = `
            <strong>${jogador.nome}</strong> - ${jogador.jogo} (${jogador.plataforma}) - ${jogador.genero} - <strong>Nickname:</strong> ${jogador.nickname}
        `;
        lista.appendChild(item);
    });
}

// Lidar com o envio do formulário
document.getElementById("gameform").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o reload da página

    // Pega os valores do formulário
    const nome = document.getElementById("name").value;
    const jogo = document.getElementById("game").value;
    const plataforma = document.getElementById("plataforma").value;
    const genero = document.getElementById("genero").value;
    const nickname = document.getElementById("nickname").value;

    // Verifica se os campos obrigatórios foram preenchidos
    if (nome === "" || jogo === "" || plataforma === "" || genero === "" || nickname === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Adiciona novo jogador na lista
    jogadores.push({ nome, jogo, plataforma, genero, nickname });

    // Exibe a mensagem de pop-up
    alert("Obrigado por participar! Seus dados ainda não foram cadastrados na lista abaixo. No momento, eles não estão sendo salvos permanentemente em um banco de dados mas em breve poderemos evoluir e salvar esses dados com o avanço desse projeto.");

    // Limpa o formulário
    document.getElementById("gameform").reset();

    // Atualiza a lista na tela
    renderizarJogadores();
});

// Chama a função para exibir os jogadores iniciais ao carregar a página
renderizarJogadores();
