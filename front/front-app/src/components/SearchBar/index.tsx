import { SearchBarStyle } from "./styles";

interface SearchBarType {
  searchString: string,
  setSearchString: React.Dispatch<React.SetStateAction<string>>
}

export function SearchBar({ searchString, setSearchString } : SearchBarType) {
  return (
    <SearchBarStyle>
      <span className="material-symbols-outlined">
        search
      </span>
      {/* <span>Procura Tag por Nome</span> */}
      <input type="text" className="text-input" placeholder="Procurar Task por Nome" value={searchString} onChange={e => setSearchString(e.target.value)}/>
    </SearchBarStyle>
  );
}
