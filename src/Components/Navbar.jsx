import  Container  from 'react-bootstrap/Container'
import logoimg from '../Assets/images/logo.png'
import navimg from '../Assets/images/4-min-1-img-nav.png'
export const Navbar = () => {
    return (
        <div className='py-3 d-none d-lg-block'>
            <Container>
                    <div className='justify-content-between d-flex'>
                        <img src={logoimg} alt="logoimg" />
                        <img src={navimg} alt="nav-img" />
                    </div>
            </Container>
        </div>
    )
}
