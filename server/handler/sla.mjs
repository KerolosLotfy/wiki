import { SLA } from "../models/sla.mjs";
import { Router } from "express";

export const sla = Router();
const api = new SLA();

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

sla.get("/", getAll);
sla.get("/:id", getOne);
sla.post("/", create);
sla.put("/", update);
sla.delete("/", Delete);
