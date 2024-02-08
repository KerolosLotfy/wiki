import { SubTabs } from "../models/subTabs.mjs";
import { Router } from "express";

export const subTabs = Router();
const api = new SubTabs();

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

const getByTab = async (req, res) => {
  try {
    const result = await api.getByTab(req.params.tabId);
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

subTabs.get("/", getAll);
// subTabs.get("/:id", getOne);
subTabs.get("/:tabId", getByTab);
subTabs.post("/", create);
subTabs.put("/", update);
subTabs.delete("/", Delete);
