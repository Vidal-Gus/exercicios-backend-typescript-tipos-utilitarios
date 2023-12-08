

type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type tipoTransacao = Carrinho["tipoTransacao"]

type CarrinhoComEndereco = Omit<Carrinho, 'tipoTransacao'> &
    Record<'endereco', Endereco> &
    Record<'tipoTransacao', Lowercase<tipoTransacao>>;
