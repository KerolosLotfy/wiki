import { Api } from "../models/index.js";
import { app } from "../server.js";
const api = new Api()

const create = async (req, res) => {
  try {
    const data = await req.body;
    const result = await api.create(data);
    res.json("Creation Done");
  } catch (e) {
    console.log(e.message);
    return e;
  }
};

const getAll = async (req, res) => {
  try {
    const result = await api.getAll();
    res.json(result);
  } catch (e) {
    return e;
  }
};

const Delete = async (req, res) => {
    try {
        const result = await api.delete()
        res.json(result)
    } catch (e) {
        console.log(e)
    }
}



export const Routers = (req, res) => {
    app.get('/', getAll)
    app.post('/', create)
    app.get('/111', (req, res) => {
        res.json('Welcome')
    })
    app.delete('/1', Delete)
}