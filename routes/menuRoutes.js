const express = require('express');
const router= express.Router();
const MenuItem=require('./../models/menuItem');


// API FOR MENU ITEM
//GET  API FOR MENU

router.get('/', async function(req, res) {
    try{
      const data=await MenuItem.find();
      console.log('Data fetched for menu');
      res.status(200).json(data);
    }
    catch{
      console.log(err);
      res.status(500).json({ err: "Data fetching error error for MENU" });
    }
  });

router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('Menu saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err); 
      res.status(500).json({ err: "server error for menu saving" });
    }
  });


module.exports=router;