import BreadCrumb from "@/components/BreadCrumb"
import styles from './index.module.scss'
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap"
import LeftMenu from "@/components/LeftMenu"

const breadcrumb = [
    {
        label: 'Thông tin tài khoản',
        path: '#'
    }
]
export default function Layout() {
    return <Row className={`${styles.User_Infor}`}>
        <div className={`col-md-9 mx-auto`}>
            <BreadCrumb data={breadcrumb} />
            <Row>
                <Col md={4} >
                    <LeftMenu />
                </Col>
                <Col md={8} >
                    <Card className="p-3">
                        <h6 className="text-uppercase">thông tin tài khoản</h6>
                    </Card>
                    <Card className="p-3 mt-3">
                        <Table>
                            <tr>
                                <td>
                                    Email:
                                </td>
                                <td>
                                    lctiendat@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tên:
                                </td>
                                <td>
                                    Le Tien Dat
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Số dư:
                                </td>
                                <td>
                                    10.000đ
                                </td>
                            </tr>
                        </Table>
                    </Card>
                    <Card className="p-3 mt-3">
                        <Card.Header className="bg-white"> <h6 className="text-uppercase">Đổi mật khẩu</h6></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Mật khẩu cũ</Form.Label>
                                    <Form.Control placeholder="Mật khẩu cũ" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Mật khẩu mới</Form.Label>
                                    <Form.Control placeholder="Mật khẩu mới" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                                    <Form.Control placeholder="Nhập lại mật khẩu mới" />
                                </Form.Group>
                                <Form.Group>
                                    <Button>Đổi mật khẩu</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </Row>

}