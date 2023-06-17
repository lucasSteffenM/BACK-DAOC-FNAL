import { openDb } from "../configDB.js";
import Tarefa from "../Model/Tarefa.js"

export async function selectTarefa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Tarefa WHERE id=?', [id])
        .then(tarefa=> res.json(tarefa) );
    });
}

export async function selectTarefas(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Tarefa')
        .then(tarefas=>  res.json(tarefas))
    });
}

export async function createTableTarefa(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Tarefa (id INTEGER PRIMARY KEY, title TEXT , description TEXT, status TEXT)')
    })
}

export async function insertTarefa(req, res){
    const tarefa = new Tarefa({...req.body});
    openDb().then(db=>{
        db.run('INSERT INTO Tarefa (title, description, status) VALUES (?,?,?)', [tarefa.title, tarefa.description, tarefa.status]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateTarefa(req, res){
    const tarefa = new Tarefa({...req.body});
    openDb().then(db=>{
        db.run('UPDATE Tarefa SET title=?, description=?, status=? WHERE id=?', [tarefa.title, tarefa.description, tarefa.status, tarefa.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteTarefa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Tarefa WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}



