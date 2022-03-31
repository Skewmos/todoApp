import { Injectable } from '@nestjs/common';
import { CreateItem } from './dto/create-item.dto';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoListService {

     todoList: Todo[] = [
        {
            id: 0,
            title: 'tololist',
            description: 'work',
            done: false
        },
        {
            id: 1,
            title: 'tololist',
            description: 'work',
            done: false
        }
        ,
        {
            id: 3,
            title: 'yeeeah',
            description: 'work',
            done: true
        }
    ];

    findAll() : Todo[] {
        return this.todoList;
    }

    findOneItem(id: string) {
        return this.todoList.find(item => item.id === Number (id));
    }

    addItem(item: CreateItem) {
        this.todoList = [...this.todoList, item as CreateItem];
    }
}
