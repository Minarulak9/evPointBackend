const pointsModel = require("./../model/pointModel");
const getAllPoints = async (req, res) => {
  res.status(200).json({ all: "NULL" });
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
const getNearestPoint = async (req, res) => {
  try {
    const { lat, lng } = req.params;
    const points = await pointsModel
      .find({
        geometry: {
          $nearSphere: {
            $geometry: {
              type: "Point",
              coordinates: [parseFloat(lng), parseFloat(lat)],
            },
            $maxDistance: 10000 * 10000,
            $minDistance: 0,
          },
        },
      })
      .limit(10);
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
const getNearesGtPoint = async (req, res) => {
  try {
    const { lat, lng } = req.params;
    const points = await pointsModel
      .find({ "properties.pointType": "garage" })
      .find({
        geometry: {
          $nearSphere: {
            $geometry: {
              type: "Point",
              coordinates: [parseFloat(lng), parseFloat(lat)],
            },
            $maxDistance: 10000 * 10000,
            $minDistance: 0,
          },
        },
      })
      .limit(10);
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
const getNearesEvtPoint = async (req, res) => {
  try {
    const { lat, lng } = req.params;
    const points = await pointsModel
      .find({ "properties.pointType": "ev" })
      .find({
        geometry: {
          $nearSphere: {
            $geometry: {
              type: "Point",
              coordinates: [parseFloat(lng), parseFloat(lat)],
            },
            $maxDistance: 10000 * 10000,
            $minDistance: 0,
          },
        },
      })
      .limit(10);
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
  getAllPoints,
  createEvPoint,
  updatePoint,
  getNearestPoint,
  getNearesGtPoint,
  getNearesEvtPoint
};
