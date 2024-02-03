import { SubTabs } from "../models/subTabs.js";
import { Router } from "express";

export const subTabs = Router();
const api = new SubTabs();

const create = async (req, res) => {
  try {
    const data = await req.body;
    const result = await api.create(data);
    res.json("Creation Done");
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const getAll = async (req, res) => {
  try {
    const result = await api.getAll(req.body.tabId);
    res.json(result);
  } catch (e) {
    return e.message;
  }
};

const update = async (req, res) => {
  try {
    const data = await req.body;
    const result = await api.update(data);
    res.json(result);
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const Delete = async (req, res) => {
  try {
    const result = await api.delete(req.body.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    return e.message;
  }
};

subTabs.get("/", getAll);
subTabs.post("/", create);
subTabs.put("/", update);

subTabs.delete("/", Delete);
