import Image from 'next/image';
import styles from './index.module.scss'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { Bell, Person , Gift } from 'react-bootstrap-icons';

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
        <>
            <Navbar expand="lg" className={styles.navbar}>
                <Container>
                    <Navbar.Brand href="#home" className='mr-auto p-2'> <Image src='/images/logo.png' width={100} height={50} alt='this is a logo' />  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={styles.navbar__menu}>
                            {/* {Array.isArray(menu) && menu.map(item => <li><Link href={item.href} key={item.key} > {item.label} </Link></li>)} */}
                                <li><Link href='/' > Trang chủ </Link></li>
                                <li><Link href='/news' > Tin tức </Link></li>
                                <li><Link href='/news' > Dịch vụ </Link></li>
                                <li><Link href='/news' > Lịch sử </Link></li>
                          
                                <li><Link href='/' className={styles.button_recharge}  > Nạp tiền </Link></li>
                                <li><Link href='/'> <Gift/> </Link></li>
                                <li><Link href='/'> <Bell /> </Link></li>
                                <li><Link href='/'> <Person /> </Link></li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

