import { Nav } from "../models/nav.js";
import { Router } from "express";

export const navTabs = Router();
const api = new Nav();

const create = async (req, res) => {
  try {
    const { title } = await req.body;
    const result = await api.create(title);
    res.json("Creation Done");
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const getAll = async (req, res) => {
  try {
    const result = await api.getAll();
    res.json(result);
  } catch (e) {
    return e.message;
  }
};

const getOne = async (req, res) => {
  try {
    const result = await api.getOne(req.body.id);
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

navTabs.post("/", create);
navTabs.get("/", getAll);
// navTabs.get("/", getOne);
navTabs.put("/", update);
navTabs.delete("/", Delete);
