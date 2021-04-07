import http from 'http';

// const authServer = (data) => http.post('./auth', data);

const authService = (data) => (
    {
        // data: {
        //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZXIubWVsbG9AcHJvZi5pbmZuZXQuZWR1LmJyIiwiaWF0IjoxNjE3NjE3NjQzLCJleHAiOjE2MTc2MTgyNDN9.YRpWemGAIf3ALZI3xzf33OGxmOIDoUCaUys2JY20VwM",
        //     "usuario": {
        //         "nome": "Ezer Mello",
        //         "email": "ezer.mello@prof.infnet.edu.br",
        //         "tipo": "2"
        //     }
        // }
    }
);


export {
    authService,
}