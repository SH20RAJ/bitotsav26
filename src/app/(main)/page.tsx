import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Bitotsav '26 | Gaatha - The Endless Saga",
  description: "Experience the grand unification of Culture, Sports, and Technology at Bitotsav '26. The 35th Edition of BIT Mesra's Premier Festival.",
};

export default function Home() {
  return <HomeClient />;
}
