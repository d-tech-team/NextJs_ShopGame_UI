import BreadCrumb from "@/components/BreadCrumb";
import React, { useEffect } from "react"
import { Col, Container, Form, Pagination, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import styles from './index.module.scss'
import Account from "@/components/Account";
import Head from "next/head";



const breadcrumb = [
    {
        label: 'Nick liên quân',
        path: '/'
    }
]

export default function Layout(props: any) {
    return <div className={`${styles.Category} SlugCategory mt-5`}>
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
            <div>
                <h6>
                    999 sản phẩm
                </h6>
            </div>
            <div>
                <ul>
                    <li>
                        <h6>Sắp xếp theo:</h6>
                    </li>
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
            {Array(5).fill(0).map(() => <Col> <Account /> </Col>)}

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
    </div>
}