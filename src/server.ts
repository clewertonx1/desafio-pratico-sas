import 'reflect-metadata';
import express from 'express'
import {Request, Response} from "express"
import { router } from './routes'
import "./database"
import "./shared/container"

const app = express();

app.use(express.json());
app.use(router)

app.get('/health', async (request: Request, response: Response) => {
  return response.status(201).send()
});

app.listen(3333, () => console.log('Listening in 3333'));