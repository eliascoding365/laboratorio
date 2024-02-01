'use client'
import { signIn } from "next-auth/react"
import Link from 'next/link'

export default function Login() {
    return (
        <button >
            <Link href='/login'>Sign in</Link>
            </button>
    )
}