import { Module } from '@nestjs/common';
import { TodoListController } from './todo_list.controller';
import { TodoListService } from './todo_list.service';

@Module({
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class TodoListModule {}
