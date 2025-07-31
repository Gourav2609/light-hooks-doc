"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ChevronRight } from "lucide-react";

export function HeroTagLine() {
  return (
    <div className="flex justify-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2"
      >
        <span>🎉</span>
        <hr className="h-4 w-px shrink-0 bg-neutral-500" />
        <span className="text-sm font-medium">Follow along on Github</span>
        <ChevronRight className="size-4 stroke-neutral-500" />
      </HoverBorderGradient>
    </div>
  );
}
