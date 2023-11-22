import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import {v1 as uuid} from 'uuid';

@Injectable()
export class BoardsService {
    private boards : Board[] = []; //그냥 Board로 하면 에러 뜨는이유 둘다 배열이어야됨

    getAllBoards(): Board[]{
        return this.boards;
    }


    createBoard(title: string, description: string ){
        const board : Board = {
            //1:15:01
            id: uuid()
            title,
            description,
            status : BoardStatus.PUBLIC
        }
    }

    

}
