import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="details">
          <h1>App Tarefas</h1>
          <h2>Organize suas tarefas</h2>
        </div>

        <button>Usuário</button>
      </HeaderContent>
    </HeaderContainer>
  );
}
