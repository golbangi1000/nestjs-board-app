import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
@Controller('boards')
export class BoardsController {
    //pirvate을 쓰면 암묵적으로 프로퍼티로 선언이됨
    constructor(private boardsService: BoardsService){}


    // GET POST PUT DELETE 이 있는데 57:39
    @Get()
    getAllBoard(): Board[]{ //board.service에서 받아오는거니깐 Board[]
        return this.boardsService.getAllBoards();
    }
}

