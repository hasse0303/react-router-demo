import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const handleStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal',
        }
    } 
  return (
    <nav>
        <NavLink style={handleStyle} to={'/'}>Home</NavLink>
        <NavLink style={handleStyle} to={'/about'}>About</NavLink>
    </nav>
  )
}
