import { Router } from "express";
import { selectTarefa, selectTarefas, createTableTarefa, insertTarefa, updateTarefa, deleteTarefa } from "../Controller/TarefaController.js";

const router = Router();

createTableTarefa();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})
router.get('/tarefa', selectTarefa)
router.get('/tarefas', selectTarefas)
router.post('/tarefa', insertTarefa)
router.put('/tarefa', updateTarefa);
router.delete('/tarefa', deleteTarefa);


export default router;