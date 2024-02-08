import { Tabs } from "../models/tabs.mjs";
import { Router } from "express";

export const tabs = Router();
const api = new Tabs();

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
    res.json(result);
    return result;
  } catch (e) {
    return e.message;
  }
};

const getOne = async (req, res) => {
  try {
    const result = await api.getOne(req.params.id);
    res.json(result);
    return result;
  } catch (e) {
    return e.message;
  }
};

const getByNav = async (req, res) => {
  try {
    const result = await api.getByNav(req.params.navId);
    res.json(result);
    return result;
  } catch (e) {
    return e.message;
  }
};

const update = async (req, res) => {
  try {
    const data = await req.body;
    const result = await api.update(data);
    res.json(result);
    return result;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const Delete = async (req, res) => {
  try {
    const result = await api.delete(req.body.id);
    res.json(result);
    return result;
  } catch (e) {
    console.log(e);
    return e.message;
  }
};

tabs.get("/", getAll);
// tabs.get("/:id", getOne);
tabs.get("/:navId", getByNav);
tabs.post("/", create);
tabs.put("/", update);
tabs.delete("/", Delete);
