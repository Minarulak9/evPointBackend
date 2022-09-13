const mongoose = require("mongoose");
const pointsSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "Feature",
    required: [true, "type is required"],
  },
  geometry: {
    type: {
      type: String,
      default: "Point",
      required: [true, "type is required field"],
    },
    coordinates: {
      type: "array",
      unique: true,
    },
  },
  properties: {
    supplierName: {
      type: String,
      required: [true, "name is required"],
      minLength: [3, "name must have 3 chareacter or more"],
      maxLength: [70, "name must have less or equal then 70 characters"],
      trim: true,
    },
    imgUrl: {
      type: String,
      required: [true, "a point must have an image"],
    },
    address: {
      city: String,
      country: String,
      region: String,
      street: String,
      streetNumber: String,
      postalCode: String,
    },
    lat: {
      type: Number,
      required: [true, "lat is required"],
    },
    lng: {
      type: Number,
      required: [true, "lng is required"],
    },
    onlinePyment: Boolean,
    phone: {
      type: Number,
      minLength: 10,
      maxLength: 12,
      required: [true, "Phone number required"],
    },
    pointType:{
      type:String,
      required:[true, "pointype is required"],
    },
    tottalPort: Number,
    availablePort: Number,
    open24x7: Boolean,
    openTime: String,
    closingTime: String,
    restroom: Boolean,
    wheller: {
      two: Boolean,
      four: Boolean,
    },
  },
});
const pointsModel = new mongoose.model("points", pointsSchema);
module.exports = pointsModel;
