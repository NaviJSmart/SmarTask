export interface Comment {
	id: string;
	comment: string;
}

export interface TaskType {
	id: string;
	sub_title: string;
	description: string;
	comments: [];
}

export interface Column {
	id: string;
	taskProcess: string;
	color: string;
	tasks: TaskType[];
}

export interface Board {
	id: string;
	title: string;
	
}

export interface BoardType {
    boards: Board[] | [];
    loading: boolean;
    error: null | string;
    selectedBoard: null | Board
}

export interface TaskColumnType {
    taskColumns: Column[] | [];
    loading: boolean;
    error: null | string;
}

