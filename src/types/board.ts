export interface Comment {
	id: string;
	comment: string;
}

export interface Task {
	id: string;
	sub_title: string;
	description: string;
	comments: Comment[];
}

export interface Column {
	id: string;
	taskProcess: string;
	color: string;
	tasks: Task[];
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