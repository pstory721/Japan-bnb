const express = require("express");
const asyncHandler = require("express-async-handler");
const { Spot, Booking,Image } = require("../../db/models");
const router = express.Router();
const {requireAuth}= require("../../utils/auth")
//
router.get(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const spots = await Spot.findByPk(req.params.id);
    const bookings = await Booking.findAll({
      where: {spotId: req.params.id}
    })
    const images = await Image.findAll({
      where: {spotId: req.params.id}
    })
    return res.json({ spots , bookings,images});
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
    const {address,city,lat,lng,name,description,price,userId,image_url,imageurlone,imageurltwo,imageurlthree,imageurlfour} = req.body
    const newSpot = await Spot.create({
      userId,
      address,
      city,
      lat,
      lng,
      name,
      description,
      price,
      image_url,
    }

      )
      const newimage1 = await Image.create({
        spotId:newSpot.id,
        imageurl:imageurlone

      })
      const newimage2 = await Image.create({
        spotId:newSpot.id,
        imageurl:imageurltwo

      })
      const newimage3 = await Image.create({
        spotId:newSpot.id,
        imageurl:imageurlthree

      })
      const newimage4 = await Image.create({
        spotId:newSpot.id,
        imageurl:imageurlfour

      })
      return res.json({newSpot});
  }))


module.exports = router;
