'use client';

import { createContext } from 'react';
import { GameContextType } from './GameContext.types';
import { getDefaultGameSteps } from '@/data/game/steps';

const defaultFunction = () => null;
export const defaultValue: GameContextType = {
  reset: defaultFunction,
  isCompleted: false,
  setIsCompleted: defaultFunction,
  steps: getDefaultGameSteps(),
  setSteps: defaultFunction,
  currentStepId: 0,
  setCurrentStepId: defaultFunction,
  isProcessing: false,
  setIsProcessing: defaultFunction,
};

export const GameContext = createContext<GameContextType>(defaultValue);
