//import {openDb} from './configDB.js';

import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors())

app.use(express.json());

import router from './View/TarefaView.js'
app.use(router);

app.listen( 4000, ()=>console.log("Api Rodando."))