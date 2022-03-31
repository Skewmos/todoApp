import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateItem } from './dto/create-item.dto';
import { Todo } from './interfaces/todo.interface';
import { TodoListService } from './todo_list.service';

@Controller('todo-list')
export class TodoListController {
    constructor(private readonly todoService: TodoListService){}


    @Get(':id') 
    findOneItem(@Param('id') id: string) {
        return this.todoService.findOneItem(id);
    }

    @Get()
    findAll(): Todo[] {
        return this.todoService.findAll();
    }

    @Post()
    addItem(@Body() newItem : CreateItem) {
        console.log(newItem);
        this.todoService.addItem(newItem);
    }

}
