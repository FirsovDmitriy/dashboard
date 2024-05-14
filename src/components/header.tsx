import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="text-foreground transition-colors hover:text-foreground">
          List goods
        </Link>
        <Link
          to="/add"
          className="text-muted-foreground transition-colors hover:text-foreground">
          Add goods
        </Link>
      </nav>
    </header>
  )
}

export default Header
