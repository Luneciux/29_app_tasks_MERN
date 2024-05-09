import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { DailyTasks } from "./components/DailyTasks";
import { MontlyTasks } from "./components/MontlyTasks";
import { Footer } from "./components/Footer";
import { TaskType } from "./types/Task";

export function App() {
  const test = true;

  const tasks: TaskType[] = [
    {
      "_id": "66354400d2940be8169b79dc",
      "title": "FAZER OS TESTES PEGA O PAIFAZER OS TESTES PEGA O PAIFAZER OS TESTES PEGA O PAI",
      "description": "teste",
      "date": "2024-04-26T20:24:16.330Z",
      "timeSpanHours": 2,
      "tags": [
        {
          "_id": "1",
          "title": "teste"
        },
        {
          "_id": "2",
          "title": "teste2"
        },
      ],
    },
    {
      "_id": "66354400d294",
      "title": "teste_5",
      "description": "teste23123123",
      "date": "2024-04-26T20:09:16.330Z",
      "timeSpanHours": 2,
      "tags": [
        {
          "_id": "1",
          "title": "teste"
        },
        {
          "_id": "2",
          "title": "teste2"
        },
        {
          "_id": "4",
          "title": "teste2"
        },
        {
          "_id": "3",
          "title": "teste2"
        },

      ],
    },
  ];

  return (
    <>
      <GlobalStyles />
      <Header />
      { test ? <DailyTasks tasks={tasks}/> : < MontlyTasks/> }
      <Footer />
    </>
  );
}
