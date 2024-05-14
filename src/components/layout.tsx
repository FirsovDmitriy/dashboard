import React from 'react'
import Header from '@/components/header'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Outlet />
      </main>
      <Toaster />
    </>
  )
}

export default Layout