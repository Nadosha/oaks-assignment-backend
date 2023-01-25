import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Todo } from '../todos/todo.model';

@ObjectType({ description: ' Main Steps ' })
export class Step {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field(type => Boolean)
  completed: boolean;

  @Field(type => [Todo])
  todo: Todo[];
}

@InputType()
export class UpdateStepsInput {
  @Field(type => ID)
  stepId: string;

  @Field(type => ID)
  todoId: string;

  @Field()
  value: boolean;
}
