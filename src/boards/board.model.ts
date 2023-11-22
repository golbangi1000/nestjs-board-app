export interface Board{
    id : string;
    title : string;
    description : string;
    status: BoardStatus;
}

export enum BoardStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

//인터페이스나 클래스로 모델을 만들수 있다. 1:02:42
//
/*
타입을  정의하는것은 선택사항 하지만 이렇게 정의해주는것으로써 원하는 타입과 다른
코드를 사용할시 에러가 발생하게됨
그리고 코드 읽을떄 더 편함 
*/