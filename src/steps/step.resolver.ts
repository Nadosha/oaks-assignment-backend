import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Step, UpdateStepsInput } from "./step.model";
import { StepService } from "./step.sevice";

@Resolver(of => Step)
export class StepResolver {
  constructor(
    private stepService: StepService
  ) {}

  @Query(returns => [Step])
  async getProgress() {
    return this.stepService.getProgress();
  }

  @Query(returns => String)
  sayHello() {
    return 'Hello motherFucker!!!';
  }

  @Mutation(returns => [Step])
  initiateProgress() {
    return this.stepService.initiateProgress();
  }

  @Mutation(returns => [Step])
  updateProgress(@Args('step') step: UpdateStepsInput) {
     return this.stepService.updateProgress(step);
  }
}
