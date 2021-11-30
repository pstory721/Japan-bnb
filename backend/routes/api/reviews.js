const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review } = require("../../db/models");
const router = express.Router();
const {requireAuth}= require("../../utils/auth")

router.get(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const reviews = await Review.findAll({
      where:{spotId:req.params.id},
      order: [
          ['id', 'DESC'],
      ],
    })
    return res.json({ reviews});
  })
);

router.delete("/:id", asyncHandler(async function (req, res) {
  const DeleteEvent = await Review.findByPk(req.params.id)
  await DeleteEvent.destroy()
  return res.json();
}));
router.put("/:id", asyncHandler(async function (req, res) {
  const UpdatedReview = await Review.findByPk(req.params.id)
  const id = req.params
  delete req.body.id
  await UpdatedReview.update(
    req.body,
    {where:{id},
    returning: true,
    plain: true
  }
  )
  return res.json({UpdatedReview});
}));
router.post('/', asyncHandler(async function (req, res) {
  const {userId,username,spotId,review} = req.body
  const newReview = await Review.create({
      userId,
      username,
      spotId,
      review

  }
    )
    return res.json({newReview});
}))
module.exports = router;
