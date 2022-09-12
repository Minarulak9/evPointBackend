const pointsModel = require("./../model/pointModel");
const getAllPoints = async (req, res) => {
  res.status(200).json({ name: "rahl" });
};
const getEvPoints = async (req, res) => {
  try {
    const points = await pointsModel.find();
    res.status(200).json({
      status: "success",
      result: points.length,
      points,
    });
  } catch (error) {
    res.status(501).json({
      message: "ev point not getting something is wrong",
      error,
    });
  }
};
const getEvPoint = async (req, res) => {
  try {
    let { lat } = req.params;
    let latt = +lat;
    console.log(latt);
    const points = await pointsModel.find({
      lat: latt,
    });
    res.status(200).json({
      status: "success",
      result: points.length,
      points,
    });
  } catch (error) {
    res.status(501).json({
      message: "ev point not getting something is wrong",
      error,
    });
  }
};
const updatePoint = async (req, res) => {
  res.send("feature not implemented successfully");
};

const createEvPoint = async (req, res) => {
  await pointsModel.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      res.status(201).json(data);
    }
  });
};

module.exports = {
  getEvPoints,
  getEvPoint,
  getAllPoints,
  createEvPoint,
  updatePoint,
};
