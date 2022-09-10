import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodosModule } from "./todo/todo.module";

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(
      "mongodb+srv://ahmedhussiendev:qwe123456@cluster0-fbbdn.mongodb.net/kbi?retryWrites=true"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
