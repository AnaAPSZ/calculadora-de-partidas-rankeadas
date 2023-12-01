let vitorias = 259
let derrotas = 100
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
let pontuacao = ranking(vitorias, derrotas)

switch (true) {
    case pontuacao < 10:
        console.log("O Herói tem de saldo de "+pontuacao, "está no nível de "+ niveis[0])
        break;

    default:
        break;
}
switch (true) {
    case pontuacao > 10 && pontuacao < 21:
        console.log("O Herói tem de saldo de "+pontuacao, "está no nível de "+ niveis[1])
        break;

    default:
        break;
}
switch (true) {
    case pontuacao > 20 && pontuacao < 51:
        console.log("O Herói tem de saldo de "+pontuacao, "está no nível de "+ niveis[2])
        break;

    default:
        break;
}
switch (true) {
    case pontuacao > 50 && pontuacao < 81:
        console.log("O Herói tem de saldo de "+pontuacao, "está no nível de "+ niveis[3])
        break;

    default:
        break;
}
switch (true) {
    case pontuacao > 80 && pontuacao < 91:
        console.log("O Herói tem de saldo de "+pontuacao, "está no nível de "+ niveis[4])
        break;

    default:
        break;
}
switch (true) {
    case pontuacao > 90 && pontuacao < 101:
        console.log("O Herói tem de saldo de "+pontuacao, "está no nível de "+ niveis[5])
        break;

    default:
        break;
}
switch (true) {
    case pontuacao >= 101:
        console.log("O Herói tem de saldo de "+pontuacao, "está no nível de "+ niveis[6])
        break;

    default:
        break;
}

ranking()

function ranking(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
}

