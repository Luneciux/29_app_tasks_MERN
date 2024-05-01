import { DateContainerStyle, DateContentStyle } from "./styles";

export function DateComponent() {
  return (
    <DateContainerStyle>
      <DateContentStyle>
        <p className="dia">29,</p>
        <p>Novembro</p>
      </DateContentStyle>
    </DateContainerStyle>
  );
}
