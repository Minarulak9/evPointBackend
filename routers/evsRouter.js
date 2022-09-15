const express = require("express");
const evsControler = require("./../controlers/evsControler");
const garageControler = require("./../controlers/garageControler");
const router = express.Router();
router.route("/").get(evsControler.getAllPoints);
router
  .route("/evs")
  .get(evsControler.getEvPoints)
  .post(evsControler.createEvPoint);
router
  .route("/evs/nearest/:lat/:lng")
  .get(evsControler.getNearestPoint)
router
  .route("/evs/nearest/g/:lat/:lng")
  .get(evsControler.getNearesGtPoint)
router
  .route("/evs/nearest/ev/:lat/:lng")
  .get(evsControler.getNearesEvtPoint)
router.route("/garage").get(garageControler.getGaragePoints);
module.exports = router;
