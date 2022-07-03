export const TaskRow = ({ task ,actualizarTarea}) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={()=>actualizarTarea(task)}
        />
      </td>
    </tr>
  );
};
