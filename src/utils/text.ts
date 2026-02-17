    export const encurtaTexto = (texto: string[], limite: number) => {
        if (texto.length <=  limite) return texto
        return texto.slice(0, limite).concat('...')

    }

    export const formataPreco = (preco = 0) => {
        return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
    }