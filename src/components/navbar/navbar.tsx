import './navbar.scss'
import { useLocation } from 'wouter'

export const Navbar = () => {
  const [,setLocation] = useLocation()

  return (
    <nav className="navbar">
      <h1 className='navbar-title' onClick={()=>{setLocation('/')}}>Fabian Velasquez</h1>
      <div className="navbar-item-container">
        <p className="navbar-items" onClick={()=>{setLocation('/about')}}>About</p>
        <p className="navbar-items" onClick={()=>{setLocation('/projects')}}>Projects</p>
        <p className="navbar-items" onClick={()=>{setLocation('/blog')}}>Blog</p>
      </div>
    </nav>
  )
}