import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TodosController } from "./controller/todo.controller";
import { TodoSchema } from "./model/todo.model";
import { TodosService } from "./services/todo.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Todo", schema: TodoSchema }])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
