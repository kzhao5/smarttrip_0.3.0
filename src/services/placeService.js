// All Parse queries related to Place
import Parse from "parse";
import PlaceModel from "../models/PlaceModel";

// fetch all active places (async)
export async function fetchAllPlaces() {
  const query = new Parse.Query(PlaceModel);
  query.equalTo("isActive", true); // example filter
  query.ascending("name");
  return await query.find(); // returns Promise<PlaceModel[]>
}
