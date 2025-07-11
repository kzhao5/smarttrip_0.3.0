// Strongly‑typed Parse subclass for Place
import Parse from "parse";

class PlaceModel extends Parse.Object {
  constructor() {
    super("Place");
  }
}

// mandatory registration
Parse.Object.registerSubclass("Place", PlaceModel);

export default PlaceModel;
