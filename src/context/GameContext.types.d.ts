import { Dispatch, SetStateAction } from "react";

export type GameStepOption = number;

export type GameStep = {
  id: number;
  options: GameStepOption[];
  selectedOption?: GameStepOption;
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
