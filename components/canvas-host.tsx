"use client"

/**
 * Hosts the fully self-contained Synesthetic Canvas app (public/synesthetic-canvas.html).
 * The `allow` attribute delegates microphone / camera / fullscreen permissions
 * down into the frame. If a browser blocks delegated device access inside a
 * nested preview frame, the "Open standalone" link runs the exact same file
 * top-level where permissions always work.
 */
export function CanvasHost() {
  return (
    <div className="relative h-full w-full">
      <iframe
        src="/synesthetic-canvas.html"
        title="Synesthetic Canvas interactive generative art experience"
        allow="microphone; camera; fullscreen; autoplay; display-capture"
        allowFullScreen
        className="h-full w-full border-0"
      />
      <a
        href="/synesthetic-canvas.html"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-4 right-4 z-10 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-[11px] text-white/70 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
      >
        open standalone ↗
      </a>
    </div>
  )
}
