import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Link href={"/basic-form"}>BasicForm</Link>
      <Link href={"/applied-form"}>AppliedForm</Link>
    </>
  );
}
