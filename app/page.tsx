import { CanvasHost } from "@/components/canvas-host"

export default function Page() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-[#07070b]">
      <h1 className="sr-only">Synesthetic Canvas — interactive generative art and sound</h1>
      <CanvasHost />
    </main>
  )
}
