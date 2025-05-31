import { IconType, IconKeys } from '@/context/GameContext.types';

export const generateRandomOptions = <T extends IconType>(
  options: IconKeys<T>[],
  length: number
): IconKeys<T>[] => {
  if (options.length < 2) {
    return Array.from({ length }, () => options[0]);
  }

  const randomOptions: IconKeys<T>[] = [];

  for (let i = 0; i < length; i++) {
    let randomOption: IconKeys<T>;

    do {
      randomOption = options[Math.floor(Math.random() * options.length)];
    } while (i > 0 && randomOption === randomOptions[i - 1]);

    randomOptions.push(randomOption);
  }

  return randomOptions;
};
