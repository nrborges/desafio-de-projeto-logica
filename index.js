const herois = [
    { nome: "Emi", XP: 8500 },
    { nome: "Kai", XP: 3000 },
    { nome: "Zara", XP: 12000 }
];

for (let i = 0; i < herois.length; i++) {
    let { nome, XP } = herois[i];
    let nivelXp;

    if (XP <= 1000) {
        nivelXp = "Ferro";
    } else if (XP >= 1001 && XP <= 2000) {
        nivelXp = "Bronze";
    } else if (XP >= 2001 && XP <= 5000) {
        nivelXp = "Prata";
    } else if (XP >= 5001 && XP <= 7000) {
        nivelXp = "Ouro";
    } else if (XP >= 7001 && XP <= 8000) {
        nivelXp = "Platina";
    } else if (XP >= 8001 && XP <= 9000) {
        nivelXp = "Ascendente";
    } else if (XP >= 9001 && XP <= 10000) {
        nivelXp = "Imortal";
    } else {
        nivelXp = "Radiante";
    }

    console.log("O Herói de nome "+nome+ " está no nível de "+ nivelXp);
}
