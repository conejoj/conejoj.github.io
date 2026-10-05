import Image from "next/image";

/**
 * The hero's visual half: the full, uncropped portrait, set inside a
 * print-style layout — offset hairline frame, corner marks, generous
 * whitespace. Motion is limited to a one-time mask reveal on load and a
 * very slow push-in on hover (both disabled for reduced-motion users).
 */
export default function HeroPortrait() {
  return (
    <div className="hero-portrait relative pb-12 pr-12">
      {/* Offset hairline frame, sitting behind the photo like a mat */}
      <div
        className="hero-portrait-frame absolute bottom-0 left-12 right-0 top-12 border border-ink/15"
        aria-hidden
      />

      {/* Photo: box matches the image's own aspect ratio, so nothing is cropped */}
      <div className="hero-portrait-mask relative aspect-[1000/1140] w-full overflow-hidden bg-stone-200">
        <div className="hero-portrait-settle absolute inset-0">
          <Image
            src="/images/portrait-hero.jpg"
            alt="Jose Conejo"
            fill
            priority
            sizes="(min-width: 768px) 480px, 100vw"
            className="hero-portrait-img object-cover [filter:saturate(0.72)_contrast(1.05)_sepia(0.07)]"
          />
        </div>
      </div>

      {/* Corner marks, same motif used on project visuals */}
      <svg
        className="absolute -left-4 -top-4 opacity-30"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        aria-hidden
      >
        <path d="M0 0H32M0 0V32" stroke="currentColor" className="text-ink" strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute -bottom-4 -right-4 opacity-40"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        aria-hidden
      >
        <path
          d="M32 32H0M32 32V0"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
