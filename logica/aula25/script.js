// Tratamentos de erros - parte 2
// recapitulando
try{
    // Executa quando não há erros
} catch(e) {
    // Executa quando há erros!
} finally {
    // Executa sempre
}

// Function return hours
const retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new Error('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        // Coloca no formato 24hr
        hour12: false,
        // Coloca dois dígitos
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

try{
    console.log(retornaHora());
} catch(e){
    // Trata erro
} finally {
    console.log('Bom dia');
}

