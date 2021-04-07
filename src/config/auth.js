const TOKEN_KEY = 'auth_gestao_cursos'

// vai dentro do localstorage faz o parse
const getToken = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if (data && data.usuario) {
        return data.usuario;
    }
    return false;
};

const getUser = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if (data && data.usuario) {
        return data.usuario;
    }
    return false;
};

// Para verificar se ele está autenticado verificamos se ele tem token
const isAuthenticated = () => {
    // pega dentro do localstorage
    // validar o token
    // return se true ou false
    return getToken() != false; // se for diferente de 'false'
};

const saveAuth = (data) => localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
// só aceita String



export {
    saveAuth,
    getToken,
    getUser, 
    isAuthenticated
}