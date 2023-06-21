

import BreadCrumb from '@/components/BreadCrumb'
import styles from './index.module.scss'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import ModalBuy from '@/components/Modal/BuyAccount'
import Divider from '@/components/Divider'
import Carousel from '@/components/Carousel'
import Account from '@/components/Account'
import { useState } from 'react'
import MainLayout from '@/components/MainLayout'



const breadcrumb = [
    {
        label: 'Nick liên quân',
        path: '/'

    },
    {
        label: 'Chi tiết nick',
        path: '/'
    }
]

export default function Layout() {
    const [isBuy, setIsBuy] = useState(false)


    const handleClose = () => {
        setIsBuy(false)
    }

    return <MainLayout> <div className={styles.slugAccount}>
        <Container>
            <BreadCrumb data={breadcrumb} />
            <Row>
                <Col md={7} >
                    <Carousel images={''} />
                </Col>
                <Col md={5} >
                    <Card className='p-3'>
                        <h6>
                            Mã số : #HOhd23i
                        </h6>
                        <Divider />

                        <h6 className='mt-2 font-weight-bold'>Thông tin acc</h6>
                        <Table striped className='mt-3'>
                            <tbody>
                                <tr>
                                    <td>
                                        Mức Rank
                                    </td>
                                    <td>Đồng</td>
                                </tr>
                                <tr>
                                    <td>
                                        Mức Rank
                                    </td>
                                    <td>Đồng</td>
                                </tr>
                                <tr>
                                    <td>
                                        Mức Rank
                                    </td>
                                    <td>Đồng</td>
                                </tr>
                                <tr>
                                    <td>
                                        Mức Rank
                                    </td>
                                    <td>Đồng</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className={styles.slugAccount__price}>
                            <p>100.000đ</p>
                            <h2>200.000đ</h2>
                            <span className={styles.slugAccount__price__discount} >-10% </span>
                        </div>
                        <Divider />
                        <Row className='d-flex justify-content-around mt-3'>
                            <Col>
                                <Button className={`${styles.slugAccount__button} bg-white text-primary`} onClick={() => alert('Chức năng đang được xây dựng')}>Trả góp</Button>
                            </Col>
                            <Col>
                                <Button className={styles.slugAccount__button} onClick={() => setIsBuy(true)}>Mua ngay</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className={styles.slugAccount__des}>
                <Card className='p-3 mt-3'>
                    <h5>Thông tin chi tiết</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero iure illo numquam laboriosam tenetur, repudiandae hic doloremque perspiciatis odio? Officia, reprehenderit deleniti. Sequi eaque iure sapiente laboriosam quaerat ea.</p>
                </Card>
            </Row>
            <Row className='mt-5'>
                <h4>Tài khoản liên quan</h4>
                {Array(5).fill(0).map(() => <Col md={3} sm={6}><Account /></Col>)}
            </Row>
            <ModalBuy isShow={isBuy} handleClose={handleClose} />
        </Container>
    </div>
    </MainLayout>
} 