'use client';

import { Button } from "@headlessui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

import { cn } from "@/utils/cn";
import { useGame } from "@/providers/game/GameProvider";

const GameNavigation = () => {
  const { currentStepId, steps, setCurrentStepId } = useGame();

  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-b-lg bg-white gap-px">
      <Button
        disabled={currentStepId === 0}
        onClick={() => setCurrentStepId((prev) => Math.max(prev - 1, 0))}
        className={cn(
          'flex items-center justify-center h-14 text-white bg-blue-500 cursor-pointer',
          'disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-80'
        )}
      >
        <ArrowLeftIcon className="size-7 inline-block" />
      </Button>
      <Button
        onClick={() =>
          setCurrentStepId((prev) => Math.min(prev + 1, steps.length - 1))
        }
        disabled={currentStepId === steps.length - 1}
        className={cn(
          'flex items-center justify-center h-14 text-white bg-blue-500 cursor-pointer',
          'disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-80'
        )}
      >
        <ArrowRightIcon className="size-7 inline-block" />
      </Button>
    </div>
  );
};

export default GameNavigation;
