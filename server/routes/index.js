const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});
router.get("/health", (req, res) => {
  res.send({ response: "Ok" }).status(200);
});
router.get("/health/ping", (req, res) => {
  res.send({ response: "pong" }).status(200);
});

module.exports = router;
