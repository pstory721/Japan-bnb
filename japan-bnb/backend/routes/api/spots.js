const express = require("express");
const asyncHandler = require("express-async-handler");
const { Spot } = require("../../db/models");
const router = express.Router();
const {requireAuth}= require("../../utils/auth")

router.get(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const spots = await Spot.findByPk(req.params.id);

    return res.json({ spots});
  })
);

router.delete("/:id", asyncHandler(async function (req, res) {
  const DeleteSpot = await Spot.findByPk(req.params.id)
  await DeleteSpot.destroy()
  return res.json(req.params.id);
}));
router.put("/:id", asyncHandler(async function (req, res) {
  const UpdatedSpot = await Spot.findByPk(req.params.id)
  const id = req.params
  delete req.body.id
  await UpdatedSpot.update(
    req.body,
    {where:{id},
    returning: true,
    plain: true
  }
  )
  return res.json({UpdatedSpot});
}));
router.post('/', asyncHandler(async function (req, res) {
    const {address,city,lat,lng,name,price} = req.body
    const newSpot = await Venue.create({
      address,
      city,
      lat,
      lng,
      name,
      price,
    }
      )
      return res.json({newSpot});
  }))

  router.post('/', asyncHandler(async function (req, res) {
    const {spotId,userId,start_date,end_date} = req.body
    const newBooking = await rsvp.create({
      spotId,
      userId,
      start_date,
      end_date
    }
      )
      return res.json({newBooking});
  }))
module.exports = router;
