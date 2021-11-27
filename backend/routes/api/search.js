const express = require("express");
const asyncHandler = require("express-async-handler");
const { Spot } = require("../../db/models");
const router = express.Router();
const {Op} = require('sequelize')



router.put(
    "/",
    asyncHandler(async function (req, res) {
      const search = req.body.input
      let spots
      let searchResult = false
      if (search !== undefined){
          spots = await Spot.findAll({
              where: {
                  name :{
                      [Op.iLike]: `%${search}%`
                  }
              }
          })
          if (spots.length > 0){
              searchResult = true
          }
      } else {
          searchResult = false;
          spots = await Spot.findAll()
      }
      return res.json(spots)
    })
  );
  module.exports = router;
