import { Col, Container, Row } from "react-bootstrap"
import Recharge from "./Recharge"
import Slider from "./Slider"


export default () => {
    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Recharge />
                    </Col>
                    <Col md={8}>
                        <Slider />
                    </Col>
                </Row>
            </Container>
        </div>


    )
}