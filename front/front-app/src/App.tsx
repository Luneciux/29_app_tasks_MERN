import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { DailyTasks } from "./components/DailyTasks";
import { MontlyTasks } from "./components/MontlyTasks";
import { Footer } from "./components/Footer";

export function App() {
  const test = true;

  return (
    <>
      <GlobalStyles />
      <Header />
      { test ? <DailyTasks /> : < MontlyTasks/>}
      <Footer />
    </>
  );
}
