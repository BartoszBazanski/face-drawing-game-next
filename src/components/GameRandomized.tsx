'use client';

import { Button } from '@headlessui/react';
import { useMemo, useState } from 'react';

import { useGame } from '@/providers/game/GameProvider';
import DiceIcon from '@/assets/dice.svg';
import { GameStepOption } from '@/context/GameContext.types';
import { generateRandomOptions } from '@/utils/generateRandomOptions';
import { cn } from '@/utils/cn';

export const GameRandomized = () => {
  const { currentStepId, steps, setSteps, isProcessing, setIsProcessing } =
    useGame();
  const [randomOption, setRandomOption] = useState<GameStepOption | null>(null);
  const { selectedOption, options } = useMemo(
    () => steps[currentStepId],
    [steps, currentStepId]
  );
  const randomize = async () => {
    setIsProcessing(true);

    const randomOptions = generateRandomOptions(options, 20);
    const getInterval = (index: number, total: number): number => {
      const progress = index / total;
      const eased = 1 - Math.pow(1 - progress, 3);

      return 50 + eased * 200;
    };
    let currentIndex = 0;
    let lastTime = 0;

    const animate = (currentTime: DOMHighResTimeStamp) => {
      const requiredInterval = getInterval(currentIndex, randomOptions.length);

      if (currentTime - lastTime >= requiredInterval) {
        setRandomOption(randomOptions[currentIndex]);
        currentIndex++;
        lastTime = currentTime;

        if (currentIndex >= randomOptions.length) {
          setIsProcessing(false);
          setSteps((prevSteps) => {
            const updatedSteps = [...prevSteps];
            updatedSteps[currentStepId].selectedOption =
              randomOptions[randomOptions.length - 1];
            return updatedSteps;
          });
          return;
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
      {selectedOption || isProcessing ? (
        <div
          className={cn('text-9xl font-bold text-blue-600', {
            'text-gray-500': isProcessing,
            'text-blue-600': selectedOption
          })}
        >
          {selectedOption || randomOption}
        </div>
      ) : (
        <Button
          onClick={randomize}
          className="size-2/3 text-white bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer"
        >
          <DiceIcon className="size-1/3" />
        </Button>
      )}
    </div>
  );
};
