import { ResetButton } from '@/components/ResetButton';
import { GameProvider } from '@/providers/game/GameProvider';
import { GameNavigation } from '@/components/GameNavigation';
import { GameResults } from '@/components/GameResults';
import { GameRandomized } from '@/components/GameRandomized';

export default function HomePage() {
  return (
    <GameProvider>
      <section className="min-h-screen p-5 bg-pink-500 flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[var(--container-md)_1fr] gap-10">
            <div className="flex justify-center items-start">
              <div className="w-full sm:max-w-md">
                <div className="w-full aspect-square rounded-t-lg bg-white p-[10%]">
                  <GameRandomized />
                </div>
                <GameNavigation />
              </div>
            </div>
            <div className="flex items-start">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                <GameResults />
                <ResetButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </GameProvider>
  );
}
