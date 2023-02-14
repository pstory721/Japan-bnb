const express = require("express");
const asyncHandler = require("express-async-handler");
const { Booking,Spot } = require("../../db/models");
const router = express.Router();
const { requireAuth } = require("../../utils/auth");


router.get(
  "/",
  requireAuth,
  asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll({
      where: { userId: req.user.id},
      include:Spot
    });
    return res.json({ bookings });
  })
);

//

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
