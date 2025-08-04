import { Leftbar } from "@/components/leftbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Light Hooks Documentation",
    default: "Documentation | Light Hooks"
  },
  description: "Comprehensive documentation for Light Hooks - A collection of useful React hooks for modern web development.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-8">
      <Leftbar key="leftbar" />
      <div className="flex-[5.25]">{children}</div>
    </div>
  );
}
