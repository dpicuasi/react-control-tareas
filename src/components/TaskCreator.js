import { useState } from "react";
import { FcAcceptDatabase } from "react-icons/fc";

export const TaskCreator = ({ crearNuevaTarea }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    crearNuevaTarea(nuevaTarea);
    setNuevaTarea("");
  };

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className="col-9">
      <input
        type="text"
        placeholder="Ingrese la tarea..."
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        className='form-control'
      ></input>
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">
          <FcAcceptDatabase/>&nbsp;Guardar
        </button>
      </div>
    </form>
  );
};
