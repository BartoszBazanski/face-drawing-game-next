import { iconsMap } from "@/data/game/steps";
import { Dispatch, SetStateAction } from "react";

export type IconType = keyof typeof iconsMap;
export type IconKeys<T extends IconType> = keyof (typeof iconsMap)[T];

export type GameStep<T extends IconType = IconType> = {
  id: number;
  type: T;
  iconColorClassName: string;
  options: Array<IconKeys<T>>;
  selectedOption: IconKeys<T> | null;
};

export type GameContextType = {
  reset: VoidFunction;
  isCompleted: boolean;
  steps: GameStep[];
  currentStepId: number;
  isProcessing: boolean;
  setIsProcessing: Dispatch<SetStateAction<GameContextType['isProcessing']>>;
  setIsCompleted: Dispatch<SetStateAction<GameContextType['isCompleted']>>;
  setSteps: Dispatch<SetStateAction<GameContextType['steps']>>;
  setCurrentStepId: Dispatch<SetStateAction<GameContextType['currentStepId']>>;
};
