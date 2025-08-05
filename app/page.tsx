import { Metadata } from "next";
import { homePageSEO } from "@/lib/seo";
import HomeClient from "./home-client";

export const metadata: Metadata = homePageSEO;

export default function Home() {
  return <HomeClient />;
}