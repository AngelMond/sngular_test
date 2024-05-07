import React, { useState } from 'react'
import { Header } from './UI/components/Header'
import { UserForm } from './pages/UserForm'
import { ContextProvider } from './pages/context/Context';
import { ShowResult } from './pages/ShowResult';

export const App = () => {

  return (
    <>
      <Header />

      <ContextProvider>
        <UserForm />
        <ShowResult />
      </ContextProvider>
    </>
  )
}
