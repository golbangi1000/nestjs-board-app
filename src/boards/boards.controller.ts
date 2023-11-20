import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')

export class BoardsController {
    //pirvate을 쓰면 암묵적으로 프로퍼티로 선언이됨
    constructor(private boardsService: BoardsService){}


    // GET POST PUT DELETE 이 있는데 57:39
    return this.boardsService.getAllBoards
}

