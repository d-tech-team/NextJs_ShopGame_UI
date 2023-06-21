import BreadCrumb from "@/components/BreadCrumb";
import { Col, Container, Form, Pagination, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import styles from './index.module.scss'
import Account from "@/components/Account";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";

const breadcrumb = [
    {
        label: 'Nick liên quân',
        path: '/'
    }
]

export default function Layout(props: any) {
    return <MainLayout>
        <div className={`${styles.Category} SlugCategory mt-5`}>
            <Container>
                <Head>
                    <title>
                        Nick liên quân
                    </title>
                </Head>
                <BreadCrumb data={breadcrumb} />
                <Row>
                    <Col>
                        <h5>Nick liên quân</h5>
                    </Col>
                    <Col className="d-flex">
                        <Form.Control placeholder="Tìm kiếm" className={styles.Category__input} />
                        <div className={styles.Category__iconSearch} >
                            <Search />
                        </div>
                    </Col>
                </Row>

                <div className={styles.Category__filter}>
                    <div className="d-flex justify-content-around">
                        <h6>
                            999 sản phẩm
                        </h6>

                        <h6>
                            Sắp xếp theo:
                        </h6>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <ul>
                            <li>
                                Ngẫu nhiên
                            </li>
                            <li>Giá từ cao đến thấp</li>
                            <li>Giá từ thấp đến cao</li>
                            <li>Mới nhất</li>
                            <li>Cũ nhất</li>
                        </ul>
                    </div>
                </div>

                <Row className={styles.Category__account}>
                    {Array(5).fill(0).map(() => <Col md={3} sm={6} xs={6} >  <Link href={'/account/1'} >
                        <Account />
                    </Link> </Col>)}

                    <div className={`mt-5 d-flex justify-content-center SlugCategory__pagination`}>
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </div>
                </Row>
            </Container>
        </div>
    </MainLayout>
}