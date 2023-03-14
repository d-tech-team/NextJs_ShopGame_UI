import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Category from '@/components/Category'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/Footer'
import Reward from '@/components/Reward'
import Link from 'next/link'
import Banner from '@/components/Header/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Container className='mt-5'>
        <h5 className='text-uppercase text-dark'>Danh mục game</h5>
        <Row>
          {Array(5).fill(0).map(() => <Col>
            <Category />
          </Col>)}
        </Row>
        <h5 className='text-uppercase text-dark mt-5'>Danh mục random</h5>
        <Row>
          {Array(5).fill(0).map(() => <Col>
            <Link href={'/categories/1'} >
              <Category />
            </Link>
          </Col>)}
        </Row>

        <Reward />
      </Container>
      <Footer />
    </>
  )
}
