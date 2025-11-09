'use client';

import { PropsWithChildren, useContext, useEffect, useState } from 'react';

import { defaultValue, GameContext } from '@/context/GameContext';
import { getDefaultGameSteps } from '@/data/game/steps';
import { useWakeLock } from "@/hooks/useWakeLock";

export const GameProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isCompleted, setIsCompleted] = useState(defaultValue.isCompleted);
  const [isProcessing, setIsProcessing] = useState(defaultValue.isProcessing);
  const [steps, setSteps] = useState(defaultValue.steps);
  const [currentStepId, setCurrentStepId] = useState(
    defaultValue.currentStepId
  );
  useWakeLock();

  const reset = () => {
    const defaultSteps = getDefaultGameSteps();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsCompleted(false);
    setSteps(defaultSteps);
    setCurrentStepId(0);
  };
  useEffect(() => {
    setIsCompleted(
      steps.every((step) => step.selectedOption !== null)
    );
  }, [steps, setIsCompleted]);

  const value = {
    reset,
    isCompleted,
    setIsCompleted,
    steps,
    setSteps,
    currentStepId,
    setCurrentStepId,
    isProcessing,
    setIsProcessing
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useIntegration must be within IntegrationsProvider');
  }

  return context;
};
