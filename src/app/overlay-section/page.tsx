import { OverlaySection } from "@/components/OverlaySection";

export default function OverlaySectionPage() {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <h2 className="text-6xl font-bold">Section 1</h2>
      </section>
      <OverlaySection>
        <div className="min-h-screen grid grid-cols-2 gap-10 items-center justify-center place-items-center py-20">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="w-80 aspect-square bg-pink-500 rounded-lg m-4"
            ></div>
          ))}
        </div>
      </OverlaySection>
      <section className="relative z-10 h-[200vh] bg-white flex items-center justify-center">
        <h2 className="text-6xl font-bold">Section 3</h2>
      </section>
    </>
  );
}
