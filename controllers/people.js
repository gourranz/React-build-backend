const express = require('express')
const {People} = require ('../models');
const models = require('../models');


async function index (req, res, next) {
    try {
        res.json(await People.find({}));
    } catch (error) {
        res.status(400).json(error)
    }

}

async function create (req,res,next) {
        try {

            res.json(await People.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
}

async function show (req,res,next) {
    try {

        res.json(await People.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

async function destroy(req,res,next) {
    try {
      // delete people by ID
      res.json(await People.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // PEOPLE UPDATE ACTION
  async function update(req,res,next) {
    try {
      // update people by ID, provide the form data, and return the updated document.
      res.json(
        await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  

module.exports = {
    create,
    show,
    index,
    delete: destroy,
    update
}



