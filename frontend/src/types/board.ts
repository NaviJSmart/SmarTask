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
