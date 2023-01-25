import { Injectable } from "@nestjs/common";
import { Step, UpdateStepsInput } from "./step.model";
import * as mock from '../../INIT_DATA.json';
import { Todo } from "../todos/todo.model";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StepService {
  private steps: Step[] = [];

  initiateProgress() {
    this.steps = [];

    mock.forEach((step) => {
      const stepItem = {
        id: uuidv4(),
        ...step,
        todo: step.todo.map((todo: Todo) => {
          todo.id = uuidv4();
          todo.completed = false
          return todo;
        })
      }
      this.steps.push(stepItem);
    });

    return this.steps;
  }

  updateProgress(step: UpdateStepsInput) {
    this.steps.map((mockStep) => {
      if (step.stepId === mockStep.id) {
        mockStep.todo.map((todo) => {
          if (todo.id === step.todoId) {
            todo.completed = step.value;
          }
        });

        mockStep.completed = mockStep.todo.every((val: { completed: boolean; }) => val.completed)
      }
    });

    return this.steps;
  }

  getProgress() {

    return this.steps;
  }
}
