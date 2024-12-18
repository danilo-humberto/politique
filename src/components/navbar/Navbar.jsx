import { House, UserRound, UsersRound } from 'lucide-react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <nav>
            <div className='nav-div-img'><img src="/images/logo-site.png" alt="logo cifra" width="200px" /></div>
            <div className='nav-div-user'>
                <div className='nav-div-icon-user'><UserRound className='icon-user'/></div>
                <div className='nav-div-information-user'>
                    <span>Cifra</span>
                    <span>Recife</span>
                </div>
            </div>
            <section className='navigation'>
                <h3>plataforma politique</h3>
                <ul>
                    <Link to={'/'}>
                        <li>
                            <House strokeWidth={1} size={30} className='icon'/>
                            <span className='navigation-text'>Home</span>
                        </li>
                    </Link>
                    <Link to={'/contact'}>
                        <li>
                            <UsersRound strokeWidth={1} size={30} className='icon' />
                            <span className='navigation-text'>Contatos</span>
                        </li> 
                    </Link>
                </ul>
            </section>
        </nav>
    </>
  )
}

export default Navbar
