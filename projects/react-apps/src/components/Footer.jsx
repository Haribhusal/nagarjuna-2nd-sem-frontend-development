import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-3">
      <div className="container mx-auto gap-10 flex">
        <div className="box flex-2">
          <h3>Logo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magni eius facere fuga, id magnam?
          </p>
          <div className="icons">
            Facebook, Twitter, Linkedin
          </div>
        </div>
        <div className="box flex-1">
          <h3 className="font-bold">Useful Links</h3>
          <ul>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>

          </ul>
        </div>
        <div className="box flex-1">
          <h3 className="font-bold">Useful Links</h3>
          <ul>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>

          </ul>
        </div>
        <div className="box">
          <h3 className="font-bold">Useful Links</h3>
          <ul>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>
            <li>
              <Link to={'/'}>Link 1</Link>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  )
}