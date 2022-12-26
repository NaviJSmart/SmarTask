
export interface TaskType {
  id: string;
  sub_title: string;
  description: string;
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
  columns: Column[];
}

export interface BoardType {
  boards: Board[] | [];
  selectedBoard: null | Board;
  selectedColumn: string | null;
  selectedTask: string | null;
}

export interface TaskColumnType {
  taskColumns: Column[] | [];
  loading: boolean;
  error: null | string;
}
export interface PayloadBoard {
  id?: string;
  title: string;
}

export interface PayloadTask {
  boardId?: string;
  columnId: string | null;
  taskId: string | null;
  sub_title: string;
  description: string;
}

export interface PayloadColumnEdit {
  boardId?: string;
  columnId: string | null;
  taskProcess: string;
  color: string;
}
