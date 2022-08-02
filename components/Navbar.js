import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'

export default function Navbar() {
  const { user, isLoading } = useUser();

  return (
    <nav className = "flex justify-between items-center py-4">
      <p className = "text-2xl font-bold text-grey-800">Todo App</p>
      <div className = "flex">
        {user && (
          <Link href="/api/auth/logout">
            <a 
              className = "rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-sfasf4"
            >
                Logut
            </a>
          </Link>
        )}
        {!user && (
          <Link href="/api/auth/login">
            <a 
                className = "rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-sfasf4"
              >
                  Login
              </a>
          </Link>
        )}
      </div>
    </nav>
  )
}
