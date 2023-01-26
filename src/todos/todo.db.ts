/* Design a database schema to store the data - Without Implementation

import {Schema} from "mongoose";

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export const todoSchema = new Schema<ITodo>({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});
*/
