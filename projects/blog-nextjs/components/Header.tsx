import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b py-3">
      <div className="mx-auto flex gap-2 items-center justify-between max-w-5xl">
        <h1>My Logo</h1>
        <nav className="flex gap-3">
          <a href="#">Home</a>
          <Link href={'/about-me'} >About Me</Link>
          {/* <a href="#">About me</a> */}
          <a href="#">My Skills</a>
          <a href="#">My Projects</a>
          <a href="#">Blog</a>
        </nav>
        <button>Contact Me</button>
      </div>

    </header>
  )
}