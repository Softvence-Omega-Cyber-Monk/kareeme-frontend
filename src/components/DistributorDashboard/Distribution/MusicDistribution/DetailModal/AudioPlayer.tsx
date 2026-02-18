import type { JSX } from "react"

export default function AudioPlayer({ url }: { url: string }): JSX.Element {
    return (
        <audio controls preload="none" className="w-full">
          <source src={url} type="audio/mpeg" />
        </audio>
      );
}