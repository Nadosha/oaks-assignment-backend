import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: ' SubTasks - Todos for each Step ' })
export class Todo {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  @Directive('@upper')
  title: string;

  @Field()
  completed: boolean;
}
