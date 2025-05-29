import { GameStepOption } from "@/context/GameContext.types";

export const generateRandomOptions = (
  options: GameStepOption[],
  length: number
): GameStepOption[] => {
  if (options.length < 2) {
    return Array.from({ length }, () => options[0]);
  }

  const randomOptions: GameStepOption[] = [];

  for (let i = 0; i < length; i++) {
    let randomOption: GameStepOption;

    do {
      randomOption = options[Math.floor(Math.random() * options.length)];
    } while (i > 0 && randomOption === randomOptions[i - 1]);

    randomOptions.push(randomOption);
  }

  return randomOptions;
};
