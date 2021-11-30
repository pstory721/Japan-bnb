const express = require("express");
const asyncHandler = require("express-async-handler");
const { Spot} = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const router = express.Router();



router.get(
    "/",
    requireAuth,
    asyncHandler(async function (req, res) {
        const spots = await Spot.findAll({  order: [
          ['id', 'DESC'],
      ],})
      return res.json({ spots });
    })
  );
  module.exports = router;
