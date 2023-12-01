import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from 'src/pipes/board-status-valication';

@Controller('boards')
export class BoardsController {
  //pirvate을 쓰면 암묵적으로 프로퍼티로 선언이됨
  constructor(private boardsService: BoardsService) {}

  // GET POST PUT DELETE 이 있는데 57:39
  @Get()
  getAllBoard(): Board[] {
    //board.service에서 받아오는거니깐 Board[]
    return this.boardsService.getAllBoards();
  }

  @Post() //body 안에여기안에 title description 다 들어있으거니깐
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    //리턴값이 Board배열이 아니니깐 Board타입

    // private boardService로 선언했으니깐 쓰면됨
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id') // rest api delete nodejs
  deleteBoardById(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status') //id랑 status 받아와서 수정
  updateBoardStatus(
    @Param() id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Board {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
