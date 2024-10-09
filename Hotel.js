// Array para armazenar os nomes dos hóspedes.  Poderia ser movido para fora da função se fosse usado em outras partes do código.
const listaHospedes = [
    "Ashilay Banks",
    "Hernandez",
    "Wesley Souza",
    "Hector Bonilha",
    "Carlos Villagrán",
    "Ramon Milhar",
];

// Variáveis globais para o nome do hotel e do usuário.  Considerar usar um objeto para melhor organização (ex: { nomeHotel: "Nome", nomeUsuario: "Nome" })
let nomeHotel;
let nomeUsuario;

// Função para realizar o login do usuário.  Utiliza recursão para solicitar a senha novamente em caso de erro.
function login() {
    nomeHotel = prompt("Insira o nome do hotel:");
    alert(`O nome do hotel é ${nomeHotel}`);

    nomeUsuario = prompt("Insira seu nome:");

    let senha = parseInt(prompt("Digite sua senha:")); // Lê a senha e converte para inteiro

    // Validação da senha: verifica se é um número e se é igual a 2678
    if (isNaN(senha) || senha !== 2678) {
        alert("Senha incorreta. Tente novamente.");
        login(); // Chama a própria função recursivamente para nova tentativa
        return; // Encerra a execução da função atual após a chamada recursiva
    }
    inicio(); // Inicia o menu principal após login bem-sucedido
}

// Função para exibir o menu principal e controlar o fluxo do programa.
function inicio() {
    alert(`Bem-vindo ao Hotel ${nomeHotel}, ${nomeUsuario}! É um imenso prazer ter você por aqui.`);

    // Loop infinito para o menu principal
    while (true) {
        let menu = parseInt(prompt( // Lê a opção do menu e converte para inteiro
            "Escolha uma opção:\n" +
            "1- Reserva Diária\n" +
            "2- Reserva\n" +
            "3- Cadastrar Hóspedes\n" +
            "4- Reservar Evento\n" +
            "5- Buffet\n" +
            "6- Auditório para Quartos\n" +
            "7- Evento\n" +
            "8- Álcool ou Gasolina\n" +
            "9- Concerto de Ar Condicionado\n" +
            "10- Sair\n"
        ));

        // Estrutura de seleção (switch) para chamar a função correspondente à opção escolhida
        switch (menu) {
            case 1: reservaDiaria(); break;
            case 2: reserva(); break;
            case 3: cadastrarHospede(); break;
            case 4: festaTrabalho(); break;
            case 5: buffet(); break;
            case 6: auditorioQuartos(); break;
            case 7: evento(); break;
            case 8: alcoolOuGasolina(); break;
            case 9: criarEmpresa(); break;
            case 10: sair(); return; // Sai do loop e encerra o programa
            default: alert("Opção inválida. Tente novamente.");
        }
    }
}

// Função para exibir mensagem de despedida ao sair do sistema
function sair() {
    alert(`Muito obrigado e até logo, ${nomeUsuario}.`);
}

// Funções para cada opção do menu

// Reserva Diária: calcula o custo total com base na diária e número de dias.
function reservaDiaria() {
    let diaria = parseFloat(prompt("Valor da diária:"));
    let dias = parseInt(prompt("Número de diárias:"));
    //Validação de dados
    if (isNaN(diaria) || diaria <= 0 || isNaN(dias) || dias <= 0 || dias > 30) {
        alert("Dados inválidos!");
        return;
    }
    alert(`Custo total: R$ ${diaria * dias}`);
}

// Reserva: solicita informações da reserva e confirma com o usuário.
function reserva() {
    let nomeHospede = prompt("Nome do hóspede:");
    let diaria = parseFloat(prompt("Valor da diária:"));
    let dias = parseInt(prompt("Número de diárias:"));

    //Validação de dados
    if (isNaN(diaria) || diaria <= 0 || isNaN(dias) || dias <= 0 || dias > 30) {
        alert("Dados inválidos!");
        return;
    }

    // Confirmação da reserva com o usuário
    if (confirm(`Confirmar reserva para ${nomeHospede} por ${dias} diárias a R$ ${diaria}?`)) {
        alert("Reserva confirmada!");
    } else {
        alert("Reserva cancelada.");
    }
}


// Cadastrar Hóspedes: adiciona um novo hóspede à lista.
function cadastrarHospede() {
    let nome = prompt("Nome do hóspede:");
    listaHospedes.push(nome);
    alert(`${nome} cadastrado com sucesso!`);
}

// Reservar Evento: calcula o custo estimado de um evento com base no número de convidados e horas.
function festaTrabalho() {
    let numConvidados = parseInt(prompt("Número de convidados:"));
    let horas = parseInt(prompt("Duração do evento (horas):"));
    //Validação de dados
    if (isNaN(numConvidados) || numConvidados <= 0 || isNaN(horas) || horas <= 0) {
        alert("Dados inválidos!");
        return;
    }
    alert(`Custo estimado: R$ ${(numConvidados * 10.5 * horas).toFixed(2)}`);
}

// Buffet: calcula o custo do buffet com base no número de convidados.
function buffet() {
    let numConvidados = parseInt(prompt("Número de convidados:"));
    //Validação de dados
    if (isNaN(numConvidados) || numConvidados <= 0) {
        alert("Dados inválidos!");
        return;
    }
    let custoCafe = numConvidados * 0.2 * 0.8;
    let custoAgua = numConvidados * 0.5 * 0.4;
    let custoSalgados = (numConvidados * 7) / 100 * 34;
    alert(`Custo do buffet: R$ ${(custoCafe + custoAgua + custoSalgados).toFixed(2)}`);
}

// Auditório para Quartos: sugere o auditório adequado com base no número de convidados.
function auditorioQuartos() {
    let numConvidados = parseInt(prompt("Número de convidados:"));
    //Validação de dados
    if (isNaN(numConvidados) || numConvidados <= 0) {
        alert("Dados inválidos!");
        return;
    }
    if (numConvidados <= 220) {
        alert("Use o auditório Laranja.");
    } else {
        alert("Use o auditório Colorado.");
    }
}

// Evento: verifica a disponibilidade do auditório com base no dia e hora do evento.
function evento() {
    let diaSemana = prompt("Dia da semana (minúscula):").toLowerCase();
    let hora = parseInt(prompt("Hora do evento:"));
    //Validação de dados
    if (isNaN(hora) || hora < 0 || hora > 24) {
        alert("Dados inválidos!");
        return;
    }
    //Verificação de disponibilidade, considerando sábado e domingo com horário reduzido.
    let disponivel = diaSemana === "sabado" || diaSemana === "domingo" ? hora <= 15 : hora >= 7 && hora <= 23;
    if (disponivel) {
        alert("Auditório disponível.");
    } else {
        alert("Auditório indisponível.");
    }
}

// Álcool ou Gasolina: compara os preços de combustíveis em dois postos e sugere a melhor opção.
function alcoolOuGasolina() {
    let alcoolWayne = parseFloat(prompt("Preço do álcool (Wayne Oil):"));
    let gasolinaWayne = parseFloat(prompt("Preço da gasolina (Wayne Oil):"));
    let alcoolStark = parseFloat(prompt("Preço do álcool (Stark Petrol):"));
    let gasolinaStark = parseFloat(prompt("Preço da gasolina (Stark Petrol):"));

    //Validação de dados
    if (isNaN(alcoolWayne) || alcoolWayne <= 0 || isNaN(gasolinaWayne) || gasolinaWayne <= 0 || isNaN(alcoolStark) || alcoolStark <= 0 || isNaN(gasolinaStark) || gasolinaStark <= 0) {
        alert("Dados inválidos!");
        return;
    }

    let melhorOpcao = "";
    let menorCusto = Infinity;

    //Comparação simplificada (ajuste conforme necessário)
    if (alcoolWayne * 1.3 < gasolinaWayne && alcoolWayne * 42 < menorCusto) {
        menorCusto = alcoolWayne * 42;
        melhorOpcao = "álcool (Wayne Oil)";
    }
    if (gasolinaWayne * 42 < menorCusto) {
        menorCusto = gasolinaWayne * 42;
        melhorOpcao = "gasolina (Wayne Oil)";
    }
    if (alcoolStark * 1.3 < gasolinaStark && alcoolStark * 42 < menorCusto) {
        menorCusto = alcoolStark * 42;
        melhorOpcao = "álcool (Stark Petrol)";
    }
    if (gasolinaStark * 42 < menorCusto) {
        menorCusto = gasolinaStark * 42;
        melhorOpcao = "gasolina (Stark Petrol)";
    }
    alert(`Melhor opção: ${melhorOpcao} (R$ ${menorCusto.toFixed(2)})`);

}

// Concerto de Ar Condicionado: calcula o custo total do serviço com base no preço por aparelho, quantidade e desconto.
function criarEmpresa() {
    let nome = prompt("Nome da empresa:");
    let valor = parseFloat(prompt("Valor por aparelho:"));
    let quantidade = parseInt(prompt("Quantidade de aparelhos:"));
    let desconto = parseFloat(prompt("Porcentagem de desconto:"));
    let minimoDesconto = parseInt(prompt("Quantidade mínima para desconto:"));

    //Validação de dados
    if (isNaN(valor) || valor <= 0 || isNaN(quantidade) || quantidade <= 0 || isNaN(desconto) || desconto < 0 || desconto > 100 || isNaN(minimoDesconto) || minimoDesconto <= 0) {
        alert("Dados inválidos!");
        return;
    }
    let custoTotal = valor * quantidade;
    if (quantidade >= minimoDesconto) {
        custoTotal *= (1 - desconto / 100);
    }
    alert(`Custo total: R$ ${custoTotal.toFixed(2)}`);
}

// Inicia o programa chamando a função de login
login();