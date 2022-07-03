export const VisibilityControl=({isChecked, setShowCompleted, limpiarTarea})=>{

    const handleDelete=()=>{
        if(window.confirm('Esta seguro de eliminar?')){
            limpiarTarea()
        }
    }

    return(
        
        <div className="d-flex justify-content-between bg-secondary text-white
        text-center p-2 border-secondary">
        <div className="form-check form-switch">
        <input
        className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas completas</label>
        </div>
        <button onClick={handleDelete} className="btn btn-danger">Clear</button>

      </div>
    )
}