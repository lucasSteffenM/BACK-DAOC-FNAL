export default class Tarefa {
    id
    title
    description
    status
    constructor(tarefa){
        Object.assign(this, tarefa);
    }
}