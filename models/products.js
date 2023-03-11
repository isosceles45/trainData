const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema(
  {
    "geometry": {
      "type": {
        "type": "String"
      },
      "coordinates": {
        "type": [
          "Array"
        ]
      }
    },
    "type": {
      "type": "String"
    },
    "properties": {
      "third_ac": {
        "type": "Number"
      },
      "arrival": {
        "type": "String"
      },
      "from_station_code": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "zone": {
        "type": "String"
      },
      "chair_car": {
        "type": "Number"
      },
      "first_class": {
        "type": "Number"
      },
      "duration_m": {
        "type": "Number"
      },
      "sleeper": {
        "type": "Number"
      },
      "from_station_name": {
        "type": "String"
      },
      "number": {
        "type": "string"
      },
      "departure": {
        "type": "String"
      },
      "return_train": {
        "type": "string"
      },
      "to_station_code": {
        "type": "String"
      },
      "second_ac": {
        "type": "Number"
      },
      "classes": {
        "type": "String"
      },
      "to_station_name": {
        "type": "String"
      },
      "duration_h": {
        "type": "Number"
      },
      "type": {
        "type": "String"
      },
      "first_ac": {
        "type": "Number"
      },
      "distance": {
        "type": "Number"
      }
    }
  }

)

module.exports = mongoose.model('Train', TrainSchema);



