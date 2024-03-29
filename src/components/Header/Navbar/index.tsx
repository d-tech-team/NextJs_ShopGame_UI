import Image from 'next/image';
import styles from './index.module.scss'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import { Bell, Person, Gift } from 'react-bootstrap-icons';

const menu = [
    {
        label: 'Trang chủ',
        key: 'home',
        icon: '',
        href: '/'
    },
    {
        label: 'Nạp thẻ',
        key: 'recharge',
        icon: '',
        href: '/'
    },
    {
        label: 'Tin tức',
        key: 'news',
        icon: '',
        href: '/'
    },
    {
        label: 'Đăng nhập',
        key: 'signin',
        icon: '',
        href: '/'
    },
    {
        label: 'Thông tin',
        key: 'profile',
        icon: '',
        href: '/'
    },
]


export default () => {
    return (
        <Navbar expand="lg" className={styles.navbar}>
            <Container>
                <Navbar.Brand className='mr-auto'><Link href='/' >  <Image src='/images/logo.png' width={100} height={50} alt='this is a logo' /></Link>  </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav border-0" />
                <Navbar.Collapse id="basic-navbar-nav border-0">
                    <Nav className={styles.navbar__menu}>
                        {/* {Array.isArray(menu) && menu.map(item => <li><Link href={item.href} key={item.key} > {item.label} </Link></li>)} */}
                        <li><Link href='/' > Trang chủ </Link></li>
                        <li><Link href='/news' > Tin tức </Link></li>
                        <li><Link href='/news' > Dịch vụ </Link></li>
                        <li><Link href='/news' > Lịch sử </Link></li>
                        <li className='d-md-block d-none'><Link href='/'> <Gift /> </Link></li>
                        <li className='d-md-block d-none'><Link href='/'> <Bell /> </Link></li>
                        {/* <li><Link href='/'> <Person /> </Link></li> */}
                        <li className='d-md-block d-none'><Link href='/auth/signin'> Đăng nhập</Link></li>
                        <li className='d-md-block d-none'><Link href='/auth/signup'> Đăng ký</Link></li>
                        <div className={`${styles.navbar__menu__button} d-md-none d-block d-flex justify-content-between`}>
                            <Link href='/auth/signin'><Button className={styles.navbar__menu__button__signin}>Đăng nhập</Button> </Link>
                            <Link href='/auth/signup'><Button className={styles.navbar__menu__button__signup}>Đăng ký</Button> </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

