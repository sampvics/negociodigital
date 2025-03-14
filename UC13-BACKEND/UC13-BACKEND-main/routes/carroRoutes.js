import express from 'express';
import { getCarros, getCarro, createCarro, updateCarro, deleteCarro} from '../controllers/carroController.js';

const router = express.Router();

//rota para obter todos os carros
router.get("/", getCarros);


//Rota para obter um carro pela sigla
router.get("/:sigla", getCarro);

//rota para criar um novo carro
router.post("/", createCarro);

//rota para atualizar um carro
router.put("/: sigla", updateCarro);


//Rota para deletar um carro
router.delete('/: sigla', deleteCarro);

export default router;

