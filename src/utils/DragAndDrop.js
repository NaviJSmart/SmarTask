export const OnDragEnd = (result, { taskColumns, dispatch, updateTaskCol }) => {
  const { destination, source, type } = result;

  if (!destination) return;

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }
//Horizontal
  if (type === "column") {
    const columns = [...taskColumns];
    const [newOrder] = columns.splice(source.index, 1);
    columns.splice(destination.index, 0, newOrder);

    dispatch(updateTaskCol(columns));
    return;
  }

  const [start] = taskColumns.filter((item) => item.id === source.droppableId);
  const [finish] = taskColumns.filter(
    (item) => item.id === destination.droppableId
  );
  //Vertical
  if (start.id === finish.id) {
    const taskOrder = [...start.tasks];
    const [newOrder] = taskOrder.splice(source.index, 1);
    taskOrder.splice(destination.index, 0, newOrder);

    const checker = taskColumns.map((item) => {
      if (item.id === start.id) {
        return { ...item, tasks: taskOrder };
      }
      return item;
    });
    dispatch(updateTaskCol(checker));

    //Horizontal
  } else {
    const startCol = [...start.tasks];
    const [newPeace] = startCol.splice(source.index, 1);

    const finishCol = [...finish.tasks];
    finishCol.splice(destination.index, 0, newPeace);

    const horizontalColumn = taskColumns.map((item) => {
      if (item.id === start.id) {
        return { ...item, tasks: startCol };
      } else if (item.id === finish.id) {
        return { ...item, tasks: finishCol };
      } else {
        return item;
      }
    });
    dispatch(updateTaskCol(horizontalColumn));
  }
};
