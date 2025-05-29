'use client';

import { Button } from '@headlessui/react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

import { useGame } from '@/providers/game/GameProvider';
import { cn } from '@/utils/cn';

export const ResetButton = () => {
  const { reset, isCompleted } = useGame();

  return (
    <Button
      disabled={!isCompleted}
      onClick={reset}
      className={cn(
        'w-full aspect-square text-white bg-blue-500 rounded-lg cursor-pointer',
        'disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-80'
      )}
    >
      <ArrowUturnLeftIcon className="size-1/3 mr-2 inline-block" />
    </Button>
  );
};
