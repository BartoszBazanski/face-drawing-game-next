import { GameStep } from "@/context/GameContext.types";

const gameSteps: GameStep[] = [
  {
    id: 1,
    options: [1, 2, 3, 4, 5],
    selectedOption: undefined
  },
  {
    id: 2,
    options: [1, 2, 3, 4, 5],
    selectedOption: undefined
  },
  {
    id: 3,
    options: [1, 2, 3, 4, 5],
    selectedOption: undefined
  },
  {
    id: 4,
    options: [1, 2, 3, 4, 5],
    selectedOption: undefined
  },
  {
    id: 5,
    options: [1, 2, 3, 4, 5],
    selectedOption: undefined
  }
];

export const getDefaultGameSteps = () => {
  return JSON.parse(JSON.stringify(gameSteps));
};

