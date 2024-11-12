"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
const router = useRouter();

  return (
    <div>
      <h1 style={{fontSize:"42px"}}> Welcome!!! </h1>
      <br />
      <Link href = "/contact"> Go to Contact page through Link</Link>
      <br />
      <Link href = "/navbar"> Go to Navbar page through Link</Link>
      <br />
      <Link href = "/about"> Go to About page through Link</Link>
      <br />
      <Link href = "/footer"> Go to Footer page through Link</Link>
      <br />
      <br />
      <button onClick = { () => router.push("./contact") }>Go to Contact Page through button tag </button>
      <br />
      <button onClick = { () => router.push("./navbar") }>Go to NavBar Page through button tag </button>
      <br />
      <button onClick = { () => router.push("./about") }>Go to About Page through button tag </button>
      <br />
      <button onClick = { () => router.push("./footer") }>Go to Footer Page through button tag </button>
    </div>
  );
}
