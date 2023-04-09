import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import styles from './index.module.scss'
import Divider from "@/components/Divider";


export default ({ isShow, handleClose }) => {

    return (
        <>
            <Modal size="sm" show={isShow} onHide={handleClose} className={styles.ModalBuy} >
                <Modal.Header closeButton>
                    <Modal.Title className="text-center w-100"><h5> Xác nhận mua hàng</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Thông tin chi tiết</h6>
                    <Table>
                        <tr>
                            <td>
                                Mã số
                            </td>
                            <td>
                                #h89wrfwAHO
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Giá tiền
                            </td>
                            <td>
                                10.000đ
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Giảm giá
                            </td>
                            <td>
                                10 %
                            </td>
                        </tr>
                    </Table>
                    <Divider />
                    <Table>
                        <tr>
                            <td>
                                Tổng thanh toán
                            </td>
                            <td>
                                10.000đ
                            </td>
                        </tr>
                    </Table>
                </Modal.Body> 
                <Modal.Footer>
                    <Button className="w-100 btn-submit" variant="primary" onClick={handleClose}>
                        Mua
                    </Button>
                </Modal.Footer>
            </Modal>
        </>)
}  
