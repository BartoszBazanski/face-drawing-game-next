'use client';

import { createContext } from 'react';
import { GameContextType } from './GameContext.types';
import { getDefaultGameSteps } from '@/data/game/steps';

const defaultFunction = () => null;
const defaultSteps = getDefaultGameSteps();
export const defaultValue: GameContextType = {
  reset: defaultFunction,
  isCompleted: false,
  setIsCompleted: defaultFunction,
  steps: defaultSteps,
  setSteps: defaultFunction,
  currentStepId: 0,
  setCurrentStepId: defaultFunction,
  isProcessing: false,
  setIsProcessing: defaultFunction
};

export const GameContext = createContext<GameContextType>(defaultValue);
