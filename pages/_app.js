//import '../styles/globals.css';
import '../styles/index.css'
import {TodosProvider} from '../contexts/TodosContext'
import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0'

//function MyApp({ Component, pageProps }) {
//  return (
//    <TodosProvider>
//      <div className="container mx-auto my-6">
//        <Component {...pageProps} />
//      </div>
//    </TodosProvider>
//  )
//}

//export default MyApp

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <TodosProvider>
        <div className="container mx-auto my-6">
          <Component {...pageProps} />
        </div>
      </TodosProvider>
    </UserProvider>
  )
}
