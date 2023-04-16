import styles from './index.module.scss'
import BreadCrumb from "@/components/BreadCrumb"
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap"
import LeftMenu from "@/components/LeftMenu"
import { ArrowClockwise } from 'react-bootstrap-icons'

const breadcrumb = [
    {
        label: 'Thông tin tài khoản',
        path: '#'
    }
]
export default function Layout() {
    return <div> <Row className={`${styles.Purchase_History}`}>
        <div className={`col-md-9 mx-auto`}>
            <BreadCrumb data={breadcrumb} />
            <Row>
                <Col md={4} >
                    <LeftMenu />
                </Col>
                <Col md={8} >
                    <Card className="p-3">
                        <Card.Header className="bg-white">
                            <div className='d-flex justify-content-between'>
                                <h6 className="text-uppercase">Tài khoản đã mua</h6>
                                <Button><ArrowClockwise /> Làm mới </Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            #Mã giao dịch
                                        </td>
                                        <td>
                                            Danh mục
                                        </td>
                                        <td>
                                            Tài khoản
                                        </td>
                                        <td>
                                            Mật khẩu
                                        </td>
                                        <td>
                                            Thời gian
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </Row>
    </div>
}