'use client';

import { useGame } from "@/providers/game/GameProvider";
import { cn } from "@/utils/cn";

export const GameResults = () => {
  const { steps, currentStepId } = useGame();

  return (
    <>
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={cn(
            'w-full aspect-square bg-pink-300 rounded-lg border-2 border-gray-300 flex items-center justify-center',
            {
              'border-blue-500 text-blue-500': currentStepId === index,
              'border-green-500 text-green-500': step.selectedOption && currentStepId !== index
            }
          )}
        >
          <span className="text-6xl font-bold">{step.selectedOption}</span>
        </div>
      ))}
    </>
  );
};
