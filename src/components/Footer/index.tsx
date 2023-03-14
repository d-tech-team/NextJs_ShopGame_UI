import { Col, Container, Row } from 'react-bootstrap'
import styles from './index.module.scss'
import { Facebook, Telephone } from 'react-bootstrap-icons'
import Copyright from './Copyright'

export default () => {
    return <div className={styles.Footer}>
        <Container>
            <Row className='pt-4'>
                <Col md={3}>
                    <img src="/images/logo.png" alt="logo" />
                    <p className='mt-3'>Web Bán Acc Liên Quân - LQM,
                        Thử May Uy Tín,
                        Giá Rẻ, Giao Dịch Tự Động 100%,
                        Trả Góp Linh Hoạt, Nick Sai Hoàn Tiền 100%.
                        Vòng Quay Quân Huy Trúng 9.999 QH Chỉ Với 9k.
                        Uy Tín Tạo Niềm Tin Với Hơn 100.000 Giao Dịch Mỗi Ngày.</p>
                    <img src="/images/dmca.png" alt="" />
                </Col>
                <Col md={3}>
                    <h5>Thông tin chung</h5>
                    <ul>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                    </ul>
                </Col>
                <Col md={3}>
                    <h5>Thông tin chung</h5>
                    <ul>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                        <li>Về chúng tôi</li>
                    </ul>
                </Col>
                <Col md={3}>
                    <h5>Hỗ trợ khách hàng</h5>
                    <ul>
                        <li> <Telephone /> Chăm sóc khách hàng: 0766.667.020</li>
                        <li> <Facebook /> Fanpage Facebook</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <Copyright />
    </div>
}