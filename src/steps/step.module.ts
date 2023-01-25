import { Module } from '@nestjs/common';
import { StepService } from "./step.sevice";
import { StepResolver } from "./step.resolver";

@Module({
  providers: [StepResolver, StepService],
})

export class StepModule {}
