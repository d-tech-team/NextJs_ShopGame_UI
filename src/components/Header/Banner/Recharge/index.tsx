import { Button, Form, Tab, Tabs } from "react-bootstrap"
import styles from './index.module.scss'

export default () => {
    return (
        <div className={`${styles.recharge} Recharge`}>
            <Tabs
                defaultActiveKey="card"
                id="fill-tab-example"
                fill
            >
                <Tab eventKey="card" title="Card Recharge" className={styles.recharge__tab}>
                    <Form className={styles.recharge__tab__form}>
                        <Form.Group>
                            <Form.Label className={styles.recharge__tab__form__label}>
                                Nhà mạng
                            </Form.Label>
                            <Form.Select className={styles.recharge__tab__form__input}>
                                <option value="">Viettel</option>
                                <option value="">Viettel</option>
                                <option value="">Viettel</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={styles.recharge__tab__form__label}>
                                Mệnh giá
                            </Form.Label>
                            <Form.Select className={styles.recharge__tab__form__input}>
                                <option value="">10.000</option>
                                <option value="">10.000</option>
                                <option value="">10.000</option>
                                <option value="">10.000</option>
                                <option value="">10.000</option>
                                <option value="">10.000</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={styles.recharge__tab__form__label}>
                                Số Seri
                            </Form.Label>
                            <Form.Control className={styles.recharge__tab__form__input} placeholder="Nhập số Seri của bạn" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={styles.recharge__tab__form__label}>
                                Mã thẻ
                            </Form.Label>
                            <Form.Control className={styles.recharge__tab__form__input} placeholder="Nhập mã thẻ của bạn" />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" className={styles.recharge__tab__form__button} >Nạp thẻ</Button>
                        </Form.Group>
                    </Form>
                </Tab>
                <Tab eventKey="atm" title="ATM Recharge">
                </Tab>
            </Tabs>
        </div>
    )
}