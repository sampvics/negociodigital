// Importando o Joi (Validação)
import Joi from "joi";
 
// Validação para inclusão carro (Modelo)
export const modeloCarro = Joi.object({
    nome: Joi.string().min(3).required().messages({
        'string.min': 'O nome do carro deve ter pelo menos 3 Caracteres.',
        'any.required': 'O nome do carro é Obrigatório.',
    }), // Nome do carro Min. 3 Caracter
    sigla: Joi.string().length(3).required().messages({
        'string.length': 'A sigla deve ter exatamente 3 Caracteres.',
        'any.required': 'A sigla é Obrigatória.',
    }), // Sigla do carro, 3 Caracter
    potencia: Joi.number().min(1).required().messages({
        'number.min': 'A Potência deve ser maior ou igua a 1.',
        'any.required': 'A Potência é Obrigatória',
    }), // Potencia mínima de 1 CV
    velocidadeMaxima: Joi.number().min(1).required().messages({
        'number.min': 'A Velocidade máxima deve ser maior ou igual a 1.',
        'any.required': 'A Velocidade é Obrigatória.',
    }), // Velocidade min. de 1
    consumo: Joi.number().min(0.1).required().messages({
        'number.min': 'O consumo deve ser maior ou igual a 0.1.',
        'any.required': 'O consumo é Obrigatório.',
    }), // Consumo mínimo de 0.1
    aceleracao: Joi.number().min(0).required().messages({
        'number.min': 'A aceleração deve ser maior ou igual a 0.',
        'any.required': 'A aceleração é Obrigatória.',
    }), // Aceleração min. de 0
    preco: Joi.number().min(0).required().messages({
        'string.min': 'O preço deve ser maior ou igual a 1.',
        'any.required': 'O preço é Obrigatório.',
    }), // Preço min. de 0
});
 
// Validação para atualização do carro
export const modeloAtualizacaoCarro = Joi.object({
    nome: Joi.string().min(3), // Nome do Carro, opcional
    sigla: Joi.string().length(3), // Sigla do carro, opcional
    potencia: Joi.number().min(1), // Potencia, opcional
    velocidadeMaxima: Joi.number().min(1), // Velocidade Máxima, opcional
    consumo: Joi.number().min(0.1), // Consumo, opcional
    aceleracao: Joi.number().min(0), // Aceleração, opcional
    preco: Joi.number().min(0), // Preço, opcional
    //ano: Joi.number().integer().min(1886).max(new Date().getFullYear()),
}).min(1); // Pelo menos um campo precisa ser atualizado