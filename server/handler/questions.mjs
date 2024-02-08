import { Question } from "../models/questions.mjs";
import { Router } from "express";

export const questions = Router();
const api = new Question();

const create = async (req, res) => {
  try {
    const data = await req.body;
    const result = await api.create(data);
    res.json(result);
    return result;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const getAll = async (req, res) => {
  try {
    const result = await api.getAll();
    res.send(result);
    return result;
  } catch (e) {
    return e;
  }
};

const getOne = async (req, res) => {
  try {
    const result = await api.getOne(req.params.id);
    res.send(result);
    return result;
  } catch (e) {
    return e;
  }
};

const update = async (req, res) => {
  try {
    const result = await api.update(req.body);
    res.json(result);
    return result;
  } catch (e) {
    console.log(e);
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
    return e;
  }
};

questions.get("/", getAll);
questions.get("/:id", getOne);
questions.post("/", create);
questions.put("/", update);
questions.delete("/", Delete);
