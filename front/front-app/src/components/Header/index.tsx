import { HeaderContainerStyle, HeaderContentStyle } from "./styles";
import { UserButton } from "../User";

export function Header() {
  return (
    <HeaderContainerStyle>
      <HeaderContentStyle>
        <div className="details">
          <h1>App Tarefas</h1>
          <h2>Organize suas tarefas</h2>
        </div>

        <UserButton />
      </HeaderContentStyle>
    </HeaderContainerStyle>
  );
}
