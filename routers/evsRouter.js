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
  .route("/evs/:lat")
  .get(evsControler.getEvPoint)
  .patch(evsControler.updatePoint);
router.route("/garage").get(garageControler.getGaragePoints);
module.exports = router;
