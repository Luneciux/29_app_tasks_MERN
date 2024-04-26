import { model, Schema } from "mongoose";

export const Task = model("Task", new Schema( {
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  timeSpanHours:  {
    type: Number,
    required: true,
  },

  tags: {
    type: [{
      tagId: {
        type: Schema.Types.ObjectId,
        ref: "Tag",
        required: false,
      }
    }],
    required: false,
  },

  userId:  {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
} ));
