import { Button, Form, Tab, Table, Tabs } from "react-bootstrap"
import styles from './index.module.scss'
import { Award, CreditCard, Gift, Person } from "react-bootstrap-icons"

export default () => {
    return (
        <div className={`${styles.Reward} Reward`}>
            <Tabs
                defaultActiveKey="card"
                id="fill-tab-example"
                fill
            >
                <Tab eventKey="card" title="Top nạp tiền" className={styles.recharge__tab}>
                    <Table className="text-center">
                        <thead>
                            <tr>
                                <th>Xếp hạng</th>
                                <th> Người dùng</th>
                                <th>  Số tiền</th>
                                <th>  Phần thưởng</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <Award /> Top 1
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                            <tr>
                                <td>
                                    <Award /> Top 2
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                            <tr>
                                <td>
                                    <Award /> Top 3
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                            <tr>
                                <td>
                                    <Award /> Top 4
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                            <tr>
                                <td>
                                    <Award /> Top 5
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                        </tbody>

                    </Table>
                </Tab>
                <Tab eventKey="atm" title="Top mua hàng">
                    <Table className="text-center">
                        <thead>
                            <tr>
                                <th>Xếp hạng</th>
                                <th> Người dùng</th>
                                <th>  Số tiền</th>
                                <th>  Phần thưởng</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <Award /> Top 1
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                            <tr>
                                <td>
                                    <Award /> Top 2
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                            <tr>
                                <td>
                                    <Award /> Top 3
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                            <tr>
                                <td>
                                    <Award /> Top 4
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                            <tr>
                                <td>
                                    <Award /> Top 5
                                </td>
                                <td>lctien***</td>
                                <td>1.000.000 <sup>đ</sup></td>
                                <td>1.000.000 <sup>đ</sup></td>
                            </tr>
                        </tbody>

                    </Table>
                </Tab>
            </Tabs>
        </div>
    )
}