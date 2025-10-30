"use client";

import NextTopLoader from "nextjs-toploader";

export function ProgressBar() {
  return (
    <NextTopLoader
      color="#3b82f6"
      initialPosition={0.3}
      crawlSpeed={200}
      height={3}
      showSpinner={false}
      easing="ease"
      speed={200}
    />
  );
}
