import { Question } from "../models/questions.js";
import { Router } from "express";

export const questions = Router();
const api = new Question();

const create = async (req, res) => {
  try {
    const data = await req.body;
    const result = await api.create(data);
    res.json("Creation Done");
    return result;
  } catch (e) {
    console.log(e.message);
    return e;
  }
};

const getAll = async (req, res) => {
  try {
    const result = await api.getAll();
    res.send(result);
  } catch (e) {
    return e;
  }
};

const Delete = async (req, res) => {
  try {
    const result = await api.delete(req.body.id);
    res.json(result);
    return result;
  } catch (e) {
    console.log(e);
  }
};

questions.get("/", getAll);
questions.post("/", create);
questions.delete("/", Delete);
