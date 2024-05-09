import React, { useState } from 'react'
import { Header } from './UI/components/Header'
import { UserForm } from './pages/UserForm'
import { ShowResult } from './pages/ShowResult';
import { ContextProvider } from './context/PageContext';

export const App = () => {

  return (
    <>
      <ContextProvider>
        <Header />
        <div className='row justify-content-center margin-top-220'>
          <div className="col-12 col-sm-10 col-md-10 col-lg-6 border-custom py-4">
            <UserForm />
          </div>
          <div className="col-10 col-sm-9 col-md-7 col-lg-6 mt-5 mt-lg-0">
            <ShowResult />
          </div>
        </div>
      </ContextProvider>
    </>
  )
}
