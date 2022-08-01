import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function Navbar() {
  const { user, isLoading } = useUser();

  return (
    <nav className = "flex justify-between items-center py-4">
      <p className = "text-2xl font-bold text-grey-800">Todo App</p>
      <div className = "flex">
        {user && (
          <a 
            href="/api/auth/logout"
            className = "rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-sfasf4"
          >
              Logut
          </a>
        )}
        {!user && (
          <a 
            href="/api/auth/login"
            className = "rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-sfasf4"
          >
              Login
          </a>
        )}
      </div>
    </nav>
  )
}
