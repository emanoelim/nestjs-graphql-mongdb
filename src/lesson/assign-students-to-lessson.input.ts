import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentsToLesson {
    @IsUUID()
    @Field(type => ID)
    lessonId: string;

    @IsUUID("4", { each: true })  // valida cada item do array
    @Field(type => [ID])
    studentsIds: string[];
}