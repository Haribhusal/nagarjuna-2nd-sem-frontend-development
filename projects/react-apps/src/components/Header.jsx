import { Link } from "react-router";

export default function Header() {
  return (
    <header className="border-b border-gray-400 py-3 px-3">
      <div className="container flex mx-auto justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold">Our APP Name</h1>
        </div>
        <nav className="flex gap-3">
          {/* <a href="/">Homepage</a> */}
          {/* <a href="/about">About</a> */}
          <Link to={'/'} >Home</Link>
          <Link to={'/about'} >About</Link>
          <Link to={'/features'} >Features</Link>
          <Link to={'/contact'} >Contact</Link>
        </nav>
        <div className="buttons flex gap-3">
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
          <Link to={'/register'}>
            <button>Get Started</button>
          </Link>

        </div>
      </div>
    </header>
  )
}