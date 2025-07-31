"use client";

import { useEffect, useState } from "react";
import { GithubIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "./magicui/shimmer-button";

interface GitHubStarsProps {
    repo: string; // Format: "owner/repo"
    className?: string;
}

export function GitHubStars({ repo, className }: GitHubStarsProps) {
    const [stars, setStars] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStars = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${repo}`);
                if (response.ok) {
                    const data = await response.json();
                    setStars(data.stargazers_count);
                } else {
                    console.warn("Failed to fetch GitHub stars");
                }
            } catch (error) {
                console.warn("Error fetching GitHub stars:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStars();
    }, [repo]);

    const formatStars = (count: number) => {
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`;
        }
        return count.toString();
    };

    return (
        <Link
            href={`https://github.com/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <ShimmerButton className="shadow-2xl">
                <div className="flex items-center gap-2 text-white">
                    <GithubIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">Star on GitHub</span>
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded text-xs ml-1">
                        <StarIcon className="h-3 w-3 fill-current text-yellow-300" />
                        {loading ? (
                            <span className="animate-pulse w-8">•••</span>
                        ) : (
                            <span className="font-semibold">{stars !== null ? formatStars(stars) : "0"}</span>
                        )}
                    </div>
                </div>
            </ShimmerButton>
        </Link>
    );
}
