"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroText() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shadowColor = mounted && resolvedTheme === "dark" ? "white" : "black";

  return (
    <h1 className="mb-5 text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl relative z-50">
      
      <LineShadowText className="italic" shadowColor={shadowColor}>
        Light
      </LineShadowText>
      {" "}
        Hooks
    </h1>
  );
}
