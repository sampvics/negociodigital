//Importa o framework Expres, usado para criar o servidor e gerenciar rotas
import express from 'express';
//Importa ass rotas relacionadas a carro (carroRoutes.js)
import carroRoutes from './routes/carroRoutes.js';

//Criar uma instancia do aplicativo Express
const app = express();

//Middlewares
app.use(express.json());

//Rotas
app.use('/carros', carroRoutes);

//Inicializa o servidor para executar na porta 3000
app.listen(3000, () => {
    //quando o servidor for iniciado, imprime no console que ele esta rodando na porta 3000
    console.log('Servidor rodando com sucesso na porta 3000');

});
