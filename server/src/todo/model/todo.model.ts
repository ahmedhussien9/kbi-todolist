import * as mongoose from "mongoose";

export const TodoSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export interface Todo extends mongoose.Document {
  id: string;
  name: string;
  isDone: boolean;
}
