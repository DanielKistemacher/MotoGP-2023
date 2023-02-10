
function randomRider() {
    let conteudoTitulo = document.getElementById("campeao");
    let imagem = document.querySelector("#image");

    //Alterando a imagem de fundo
    const sheet = new CSSStyleSheet();
    sheet.insertRule(`html {
    background-image: url("./src/backgroud/champion.png");
    }`);
    document.adoptedStyleSheets = [sheet];
    
    //Sorteando um piloto
    const riders = [1, 5, 10, 12, 20, 21, 23, 25, 30, 33, 36, 37, 41, 42, 43, 44, 49, 72, 73, 88, 89, 93];
    let rider = Math.random() * 22;
    let champion = riders[Math.round(rider)];

    switch(champion){
        case 1:
            conteudoTitulo.innerHTML = "Francesco Bagnaia #63";
            imagem.setAttribute('src', './src/riders/63_Francesco_Bagnaia.png');
            break;
        case 5:
            conteudoTitulo.innerHTML = "Johann Zarco #05";
            imagem.setAttribute('src', './src/riders/05_Johann_Zarco.png');
            break;
        case 10:
            conteudoTitulo.innerHTML = "Luca Marini #10";
            imagem.setAttribute('src', './src/riders/10_Luca_Marini.png');
            break;
        case 12:
            conteudoTitulo.innerHTML = "Maverick Viñales #12";
            imagem.setAttribute('src', './src/riders/12_Maverick_Vinales.png');
            break;
        case 20:
            conteudoTitulo.innerHTML = "Fábio Quartararo #20";
            imagem.setAttribute('src', './src/riders/20_Fabio_Quartararo.png');
            break;
        case 21:
            conteudoTitulo.innerHTML = "Franco Morbidelli #21";
            imagem.setAttribute('src', './src/riders/21_Franco_Morbidelli.png');
            break;
        case 23:
            conteudoTitulo.innerHTML = "Enea Bastianini #23";
            imagem.setAttribute('src', './src/riders/23_Enea_Bastianini.png');
            break;
        case 25:
            conteudoTitulo.innerHTML = "Raul Fernandez #25";
            imagem.setAttribute('src', './src/riders/25_Raul_Fernandez.png');
            break;
        case 30:
            conteudoTitulo.innerHTML = "Takaaki Nakagami #30";
            imagem.setAttribute('src', './src/riders/30_Takaaki_Nakagami.png');
            break;
        case 33:
            conteudoTitulo.innerHTML = "Brad Binder #33";
            imagem.setAttribute('src', './src/riders/33_Brad_Binder.png');
            break;
        case 36:
            conteudoTitulo.innerHTML = "Joan Mir #36";
            imagem.setAttribute('src', './src/riders/36_Joan_Mir.png');
            break;
        case 37:
            conteudoTitulo.innerHTML = "Augusto Fernandez #37";
            imagem.setAttribute('src', './src/riders/37_Augusto_Fernandez.png');
            break;
        case 41:
            conteudoTitulo.innerHTML = "Aleix Espargaro #41";
            imagem.setAttribute('src', './src/riders/41_Aleix_Espargaro.png');
            break;
        case 42:
            conteudoTitulo.innerHTML = "Alex Rins #42";
            imagem.setAttribute('src', './src/riders/42_Alex_Rins.png');
            break;
        case 43:
            conteudoTitulo.innerHTML = "Jack Miller #43";
            imagem.setAttribute('src', './src/riders/43_Jack_Miller.png');
            break;
        case 44:
            conteudoTitulo.innerHTML = "Pol Espargaro #44";
            imagem.setAttribute('src', './src/riders/44_Pol_Espargaro.png');
            break;
        case 49:
            conteudoTitulo.innerHTML = "Fabio Di Giannantonio #49";
            imagem.setAttribute('src', './src/riders/49_Fabio_DiGiananntonio.png');
            break;
        case 72:
            conteudoTitulo.innerHTML = "Marco Bezzecchi #72";
            imagem.setAttribute('src', './src/riders/72_Marco_Bezzecchi.png');
            break;
        case 73:
            conteudoTitulo.innerHTML = "Alex Marquez #73";
            imagem.setAttribute('src', './src/riders/73_Alex_Marquez.png');
            break;
        case 88:
            conteudoTitulo.innerHTML = "Miguel Oliveira #88";
            imagem.setAttribute('src', './src/riders/88_Miguel_Oliveira.png');
            break;
        case 89:
            conteudoTitulo.innerHTML = "Jorge Martin #89";
            imagem.setAttribute('src', './src/riders/89_Jorge_Martin.png');
            break;
        case 93:
            conteudoTitulo.innerHTML = "Marc Marquez #93";
            imagem.setAttribute('src', './src/riders/93_Marc_Marquez.png');
            break;
    }
}