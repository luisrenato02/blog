import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={'/'}>
        <h2>Blog</h2>
      </Link>
      < ul >
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/new'} className="new-btn">Novo Post</Link>
        </li>
      </ul>
    </nav >
  )
}