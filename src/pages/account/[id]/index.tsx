

import BreadCrumb from '@/components/BreadCrumb'
import styles from './index.module.scss'
import { Card, Col, Row, Table } from 'react-bootstrap'
import Divider from '@/components/Divider'

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

    return <div>
        <BreadCrumb data={breadcrumb} />
        <Row>
            <Col md={7} >
                image
            </Col>
            <Col md={5} >
                <Card className='p-3'>
                    <h4>Nick liên quân </h4>
                    <h6>
                        Mã số : #HOhd23i
                    </h6>
                    <Divider />

                    <p>Thông tin acc</p>
                    <Table striped>
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
                </Card>
            </Col>
        </Row>
    </div>
}