import React, { useState } from 'react'
import { Header } from './UI/components/Header'
import { UserForm } from './pages/UserForm'
import { ContextProvider } from './pages/context/Context';
import { ShowResult } from './pages/ShowResult';

export const App = () => {

  return (
    <>
      <ContextProvider>
        <Header />
        <div className='row margin-top-220'>
          <div className="col-6 border-end">
            <UserForm />
          </div>
          <div className="col-6">
            <ShowResult />
          </div>
        </div>
      </ContextProvider>
    </>
  )
}
