import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import styles from './index.module.scss'
import EmptyLayout from '@/components/EmptyLayout'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowBarRight, ChevronLeft, ChevronRight, Eye, EyeSlash } from 'react-bootstrap-icons'
import { useState } from 'react'

const SignLayout = () => {
   const [isShowPass,setIsShowPass] = useState(false)
   const [isShowRePass,setIsShowRePass] = useState(false)
   
    return <div className='min-vh-100 h-100 d-flex align-items-center justify-content-center auth'>
        <Head>
            <title>Đăng ký tài khoản</title>
        </Head>
        <Container>
            <Row>
                <Col md={10} className='mx-auto'>
                    <Card className='p-5'>
                        <Row>
                            <Col md={7}>
                           <Link href={'/'}> <Button><ChevronLeft/>Home</Button></Link>
                                <h3 className='text-center font-weight-bold text-uppercase'>sign up</h3>
                                <p className='text-secondary'>You do not have an account, please register to join us</p>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>
                                            Name
                                        </Form.Label>
                                        <Form.Control placeholder='Type your name' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            Email
                                        </Form.Label>
                                        <Form.Control placeholder='Type your email' />
                                    </Form.Group>
                                    <Form.Group className='position-relative'>
                                        <Form.Label>
                                            Password
                                        </Form.Label>
                                        <Form.Control type={`${isShowPass ? 'text' : 'password'}`} placeholder='Type your password' />
                                        { isShowPass ?  <Eye className={`${styles.iconEye} position-absolute`} onClick={()=>setIsShowPass(!isShowPass)}/> :           
                                         <EyeSlash className={`${styles.iconEye} position-absolute`} onClick={()=>setIsShowPass(!isShowPass)}/> }
                                    </Form.Group>
                                    <Form.Group  className='position-relative'>
                                        <Form.Label>
                                            RePassword
                                        </Form.Label>
                                        <Form.Control  type={`${isShowRePass ? 'text' : 'password'}`} placeholder='Type your repassword' />
                                        { isShowRePass ?  <Eye className={`${styles.iconEye} position-absolute`} onClick={()=>setIsShowRePass(!isShowRePass)}/> :           
                                         <EyeSlash className={`${styles.iconEye} position-absolute`} onClick={()=>setIsShowRePass(!isShowRePass)}/> }                                    </Form.Group>
                                    <Form.Group>
                                        <Button className='w-100'>Sign Up</Button>
                                    </Form.Group>
                                </Form>
                                <p className='mt-3 '>You already have an account please <Link href={'/auth/signin'}>login</Link> </p>
                            </Col>
                            <Col md={5}>
                                <img src='/images/banner-signup.jpg' className='w-100' alt='banner' />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}

SignLayout.Layout = EmptyLayout

export default SignLayout