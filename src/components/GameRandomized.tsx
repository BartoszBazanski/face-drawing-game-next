'use client';

import { Button } from '@headlessui/react';
import { useMemo, useState } from 'react';

import { useGame } from '@/providers/game/GameProvider';
import DiceIcon from '@/assets/dice.svg';
import { generateRandomOptions } from '@/utils/generateRandomOptions';
import { iconsMap } from '@/data/game/steps';
import { cn } from '@/utils/cn';

export const GameRandomized = () => {
  const { currentStepId, steps, setSteps, isProcessing, setIsProcessing } =
    useGame();
  const currentStepData = steps[currentStepId];
  const { selectedOption, options, type, iconColorClassName } = currentStepData;
  const [randomOption, setRandomOption] = useState<string | null>(null);
  const randomize = async () => {
    setIsProcessing(true);

    const randomOptions = generateRandomOptions<typeof type>(options, 20);
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
  const selectedOrRandomOption = useMemo(() => {
    if (selectedOption !== null) {
      return selectedOption;
    }
    if (randomOption !== null) {
      return randomOption;
    }
    return null;
  }, [selectedOption, randomOption]);

  return (
    <div className="relative w-full aspect-square bg-white rounded-lg flex items-center justify-center">
      {options.map((option) => {
        const OptionIcon = iconsMap[type][option] as React.FC<
          React.SVGProps<SVGSVGElement>
        >;

        return (
          <OptionIcon
            key={option}
            className={cn('absolute inset-0 -z-10 w-full', iconColorClassName, {
              'z-10': selectedOrRandomOption === option
            })}
          />
        );
      })}
      {!selectedOption && !isProcessing && (
        <Button
          onClick={randomize}
          className="absolute z-10 size-2/3 text-white bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <DiceIcon className="size-1/3" />
        </Button>
      )}
    </div>
  );
};
