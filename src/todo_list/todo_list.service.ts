import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoListService {

     todoList = [
        {
            id: 0,
            title: 'tololist',
            description: 'work'
        },
        {
            id: 1,
            title: 'tololist',
            description: 'work'
        }
    ];

    findAll() : any[] {
        return this.todoList;
    }
}
