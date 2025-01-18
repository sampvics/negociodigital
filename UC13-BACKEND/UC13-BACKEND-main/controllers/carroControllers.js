import { getAllcarros , getCarrosBySigla, createCarro as modelCreateCarro, updateCarro as modelCreateCarro, deleteCarro as modelDeleteCarro} from '../models/carroModel.js';

export const getCarros = (req, res) => {
//Chama a função que retorna todos os carros do array
const carros = getAllcarros();
//Retorna os carros com status 200 (ok)
res.status(200).json(carros);

};

//função para retornar um carro especifico com base na sigla fornecida
export const getCarro = (req, res) => {
    //Extrai  sigla o carro da URL (Rota)
    const {sigla} = req.params;
    //Chama a função que retorna o carro pela sigla, convertendo a sigla para maiusculas
    const carro = getCarrosBySigla(sigla.toUpperCase());

    


//Se o carro não for encontrado retornar o erro 404(Não encontrado)
if(!carro){
    return res.status(404).jon({mensagem: 'Carro não encontrado'});

}

//Retorna o carro encontrado com o status 200 (ok)
    res.status(200).json(carro);
};

//Função para criar um novo carro
export const createCarro = (res, req) => {
    //Valida os dados do carro recebidos na requisição com base no modelo definido
    const {error} = modeloCarro.validade(req.body);
    //Se houver erro de validação
    if (error) {
        return res.status(400).json({mensagem: erro.details[0].message});

    }

    //Caso os dados sejam válidos, criar um novo carro com os dados de requisição
    const novoCarro = req.body;
    //Chama a função para adicionar o novo carro
    const carroCriado = modelCreateCarro(novoCarro);
    //Retorna o carro criado
    req.status(201).json(carroCriado);

};

//Função para atualizar um carro existente
export const updateCarro = (req, res) => {
    //Extrai a sigla do carro da URL (Rota)
    const {sigla} = req.params;
    //Valida os dados de atualização com base no modelo
    const { error } = modeloAtualizacaoCarro.validade(req.body);
    //Se houver erro de validação, rtorna status 400 (Bad Request) e a mensagem do erro
    if (error) {
        return res.status(400).json({mensagaem: error.details [0].message});
    }

    //Chama a função para atualizar os dados do carro, passando a sigla e os novos dados
    const carroAtualizado = modeUpdateCarro(sigla.toUpperCase(), req.body);

    //Se o carro nao for encontrado para atualização, retorna status 404 (Não encontrado)
    if (!carroAtualizado) {
        return res.status(404).json({mensagem: 'Carro não encontrado para atualização'});
    }

    //Retorna o carro atualizado com o status 200 (ok)
    res.status(200).json(carroAtualizado);

};

//Função paara excluir um carro existente
export const deleteCarro = (req , res) => {
    //Extrai a sigla do carro da URL (Rota)
    const { sigla } = req.params;
     //Chama a função para remover o carro, passando a sigla
     const carroRemovido = modelDeleteCarro(sigla.toUpperCase());
      
     //Se o carro não for encontrado para remoção, retorna status 404 (não encontrado)
     if  (!carroRemovido) {
        return res.status(404).json({mensagem: 'Carro nao encontrado'});

     }

     //Retorna uma mensafem de sucesso e os dados do carro removido com status 200 (ok)
     res.status(200).json({mensagem: 'Carro removido com sucesso', carro: carroRemovido});


     
    };
