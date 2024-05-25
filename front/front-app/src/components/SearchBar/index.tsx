import { SetStateAction } from "react";
import { SearchBarStyle } from "./styles";

interface SearchBarTypes {
  setSearchString: React.Dispatch<SetStateAction<string>>
}

export function SearchBar({ setSearchString }: SearchBarTypes) {

  function filterTasks (searchString: string) {
      setSearchString(searchString);
  }

  return (
    <SearchBarStyle>
      <span className="material-symbols-outlined">
        search
      </span>
      {/* <span>Procura Tag por Nome</span> */}
      <input type="text" className="text-input" placeholder="Procurar Task por Nome" onChange={e => { filterTasks(e.target.value) }}/>
    </SearchBarStyle>
  );
}
