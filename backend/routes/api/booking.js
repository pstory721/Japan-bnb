const express = require("express");
const asyncHandler = require("express-async-handler");
const { Booking } = require("../../db/models");
const router = express.Router();






  router.post('/', asyncHandler(async function (req, res) {
    const {spotId,userId,start_date,end_date} = req.body
    const newBooking = await Booking.create({
      spotId,
      userId,
      start_date,
      end_date
    }
      )
      return res.json({newBooking});
  }))
  module.exports = router;
