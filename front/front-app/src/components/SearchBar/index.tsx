import { SearchBarStyle } from "./styles";

export function SearchBar() {
  return (
    <SearchBarStyle>
      <span className="material-symbols-outlined">
        search
      </span>
      {/* <span>Procura Tag por Nome</span> */}
      <input type="text" className="text-input" placeholder="Procurar Task por Nome"/>
    </SearchBarStyle>
  );
}
