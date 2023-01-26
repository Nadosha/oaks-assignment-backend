/* Design a database schema to store the data - Without Implementation

import {Schema, model} from "mongoose";
import { todoSchema, ITodo } from '../todos/todo.db';

interface IStep {
  id: string
  title: string;
  completed: boolean;
  todo: [ITodo];
}

const StepsSchema = new Schema<IStep>({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
  },
  todo: {
    type: [todoSchema],
    required: true,
  },
});

export const Steps = model<IStep>("steps", StepsSchema);
*/
