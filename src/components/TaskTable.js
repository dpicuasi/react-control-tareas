import {TaskRow} from './TaskRow'

export const TaskTable=({tareas,actualizarTarea,showCompleted=false})=>{

const taskTableRows=(doneValue)=>{
  console.log(doneValue)
  return (tareas
    .filter(task=>task.done===doneValue)
    .map(task => (
    <TaskRow task={task} key={task.name} actualizarTarea={actualizarTarea}/>
  )));
}


    return (
    <table className='table table-dark table-striped table-bordered border-secondary'>
    <thead>
      <tr className='table-primary'>
        <th className='text-center'>{showCompleted?'Listado Realizado':'Listado de tareas'}</th>
      </tr>
    </thead>
    <tbody>
      {
        taskTableRows(showCompleted)
      }
    </tbody>
  </table>)
}