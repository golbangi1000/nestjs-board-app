import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
@Controller('boards')
export class BoardsController {
    //pirvate을 쓰면 암묵적으로 프로퍼티로 선언이됨
    constructor(private boardsService: BoardsService){}


    // GET POST PUT DELETE 이 있는데 57:39
    @Get()
    getAllBoard(): Board[]{ //board.service에서 받아오는거니깐 Board[]
        return this.boardsService.getAllBoards();
    }


    @Post()
    createBoard(
        @Body() createBoardDto : CreateBoardDto, //여기안에 title description 다 들어있으거니깐 
        ) : Board {//리턴값이 Board배열이 아니니깐 Board타입

                // private boardService로 선언했으니깐 쓰면됨 
        return this.boardsService.createBoard(createBoardDto);

    }

    

    @Get('/:id')
    getBoardById(@Param('id') id: string) : Board{
        return this.boardsService.getBoardById(id)
    }
}

