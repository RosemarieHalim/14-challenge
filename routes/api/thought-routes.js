const router = require("express").Router();

const {
  getAllThoughts,
  createReaction,
  getThoughtById,
  createThought,
  removeReaction,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction).delete(removeReaction);

module.exports = router;