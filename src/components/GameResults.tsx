'use client';

import { iconsMap } from '@/data/game/steps';
import { useGame } from '@/providers/game/GameProvider';
import { cn } from '@/utils/cn';

export const GameResults = () => {
  const { steps, currentStepId } = useGame();

  return (
    <>
      {steps.map(({ id, selectedOption, type, iconColorClassName }, index) => {
        const OptionIcon = selectedOption
          ? (iconsMap[type][selectedOption] as React.FC<
              React.SVGProps<SVGSVGElement>
            >)
          : null;

        return (
          <div
            key={id}
            className={cn(
              'w-full aspect-square bg-white rounded-lg border-2 border-gray-300 flex items-center justify-center',
              {
                'border-blue-500 text-blue-500': currentStepId === index,
                'border-green-500 text-green-500':
                  selectedOption && currentStepId !== index
              }
            )}
          >
            {OptionIcon && (
              <OptionIcon className={cn('w-full', iconColorClassName)} />
            )}
          </div>
        );})}
    </>
  );
};
