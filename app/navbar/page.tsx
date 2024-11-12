"use client";

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
    <div>navbar</div>
    <br />
    <br />
    <Link href = "./"> Go back to Home Page through Link</Link>
    <br />
    <button onClick = { () => router.push("./")}> Go back to Home Page through button</button>
    </>
  )
}

export default Navbar