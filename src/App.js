import "./App.css";
import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from './components/Container';

function App() {
  const [tareaItems, setTareaItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function crearNuevaTarea(nombreTarea) {
    if (!tareaItems.find((task) => task.name === nombreTarea)) {
      setTareaItems([...tareaItems, { name: nombreTarea, done: false }]);
    }
  }

  const actualizarTarea = (tarea) => {
    setTareaItems(
      tareaItems.map((t) =>
        t.name === tarea.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const limpiarTarea = () => {
    setTareaItems(tareaItems.filter((tarea) => !tarea.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("tarea");
    console.log("datos", data);
    if (data) {
      setTareaItems(JSON.parse(data));
      console.log("tarea items:", tareaItems);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("tarea", JSON.stringify(tareaItems));
  }, [tareaItems]);

  return (
    <main className="bg-dark vh-100 text-white">
     <Container>
     <TaskCreator crearNuevaTarea={crearNuevaTarea} />
        <TaskTable tareas={tareaItems} actualizarTarea={actualizarTarea} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          limpiarTarea={limpiarTarea}
        />

        {showCompleted === true && (
          <TaskTable
            tareas={tareaItems}
            actualizarTarea={actualizarTarea}
            showCompleted={showCompleted}
          />
        )}
     </Container>
    </main>
  );
}

export default App;
