import { model, Schema } from "mongoose";

export const User = model("User", new Schema( {
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
} ));
