"use client";

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();
  return (
    <>
    <div>Contact PAge!</div>
    <br />
    <br />
    <Link href = "./"> Go back to Home Page through Link</Link>
    <br />
    <button onClick = { () => router.push("./")}> Go back to Home Page through button</button>
    </>
  )
}

export default Contact