import { Controller, Get } from '@nestjs/common';
import { TodoListService } from './todo_list.service';

@Controller('todo-list')
export class TodoListController {
    constructor(private readonly todoService: TodoListService){}
    
    @Get()
    findAll(): any[] {
        return this.todoService.findAll();
    }

}
