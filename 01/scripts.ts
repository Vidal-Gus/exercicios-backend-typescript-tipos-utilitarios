

type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

type UsuarioNovo = Required<Omit<Usuario, 'rg'>>
