// Verifica se é modo retrato ou paisagem
const ePaisagem = (largura, altura) => {
    return largura > altura ? `Modo paisagem` : `Modo retrato`;
};

console.log(ePaisagem(800, 500));