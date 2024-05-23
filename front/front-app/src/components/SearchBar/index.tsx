import { useContext } from "react";
import { SearchBarStyle } from "./styles";
import { TasksContext } from "../../App";

export function SearchBar() {

  const { tasks, setTasks } = useContext(TasksContext);

  function filterTasks (searchString: string) {
    setTasks(tasks.filter((task) => task.title.includes(searchString)));
  }

  return (
    <SearchBarStyle>
      <span className="material-symbols-outlined">
        search
      </span>
      {/* <span>Procura Tag por Nome</span> */}
      <input type="text" className="text-input" placeholder="Procurar Task por Nome" onChange={e => {
        e.preventDefault();

        filterTasks(e.target.value)
      }}/>
    </SearchBarStyle>
  );
}
