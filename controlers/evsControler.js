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
const getNearestEvPoint = async (req, res) => {
  try {
    const { lat, lng } = req.body.lat;
    console.log(req.body);
    const points = await pointsModel.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          key: "location",
          maxDistance: parseInt(1000) * 1609,
          distanceField: "dist.calculated",
          spherical: true,
        },
      },
    ]);
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
  getNearestEvPoint,
};
