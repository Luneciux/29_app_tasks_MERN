import { model, Schema } from "mongoose";

export const Tag = model("Tag", new Schema( {
  title: {
    type: String,
    required: true,
  },
  userId:  {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
} ));
