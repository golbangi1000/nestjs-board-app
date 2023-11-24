import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import {v1 as uuid} from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards : Board[] = []; //그냥 Board로 하면 에러 뜨는이유 둘다 배열이어야됨

    getAllBoards(): Board[]{
        return this.boards;
    }


    createBoard(createBoardDto: CreateBoardDto){

        const {title, description} = createBoardDto

        const board : Board = {
            id: uuid(),
            title,   // title : title 이거랑 같음
            description, // 이것도 description : description 이랑 같음 
            status : BoardStatus.PUBLIC
        }

        this.boards.push(board)

        return board;
    }

    getBoardById( id: string) : Board{
        return this.boards.find( (board) => board.id === id)
    }


    

}
