
function sortearRider() {
    let conteudoTitulo = document.getElementById("campeao").innerHTML.valueOf;
    const riders = [1, 5, 10, 12, 20, 21, 23, 25, 30, 33, 36, 37, 41, 42, 43, 44, 49, 72, 73, 88, 89, 93];
    let rider = Math.random() * 22;
    let champion = riders[Math.round(rider)];
    
    switch(champion){
        case 1:
            conteudoTitulo.innerHTML = "Francesco Bagnaia";
            break;
        case 5:
            conteudoTitulo.innerHTML = "Johann Zarco";
            break;
        case 10:
            conteudoTitulo.innerHTML = "Luca Marini";
            break;
        case 12:
            conteudoTitulo.innerHTML = "Maverick Viñales";
            break;
        case 20:
            conteudoTitulo.innerHTML = "20 Johann Zarco";
            break;
        case 21:
            conteudoTitulo.innerHTML = "21 Johann Zarco";
            break;
        case 23:
            conteudoTitulo.innerHTML = "23 Johann Zarco";
            break;
        case 25:
            conteudoTitulo.innerHTML = "25 Johann Zarco";
            break;
        case 30:
            conteudoTitulo.innerHTML = "30 Johann Zarco";
            break;
        case 33:
            conteudoTitulo.innerHTML = "33 Johann Zarco";
            break;
        case 36:
            conteudoTitulo.innerHTML = "36 Johann Zarco";
            break;
        case 37:
            conteudoTitulo.innerHTML = "37 Johann Zarco";
            break;
        case 41:
            conteudoTitulo.innerHTML = "41 Johann Zarco";
            break;
        case 42:
            conteudoTitulo.innerHTML = "42 Johann Zarco";
            break;
        case 43:
            conteudoTitulo.innerHTML = "43 Johann Zarco";
            break;
        case 44:
            conteudoTitulo.innerHTML = "44 Johann Zarco";
            break;
        case 49:
            conteudoTitulo.innerHTML = "49 Johann Zarco";
            break;
        case 72:
            conteudoTitulo.innerHTML = "72 Johann Zarco";
            break;
        case 73:
            conteudoTitulo.innerHTML = "73 Johann Zarco";
            break;
        case 88:
            conteudoTitulo.innerHTML = "88 Johann Zarco";
            break;
        case 89:
            conteudoTitulo.innerHTML = "89 Johann Zarco";
            break;
        case 93:
            conteudoTitulo.innerHTML = "93 Johann Zarco";
            break;
    }
}