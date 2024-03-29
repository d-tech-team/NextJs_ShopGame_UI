import React from "react";
import Category from '@/components/Category'
import { Col, Container, Row } from 'react-bootstrap'
import Reward from '@/components/Reward'
import Link from 'next/link'
import Banner from '@/components/Header/Banner'
import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Banner />
        <Container className='mt-5'>
          <h5 className='text-uppercase text-dark'>Danh mục game</h5>
          <Row>
            {Array(5).fill(0).map((i, item) => <Col md={3} sm={6} xs={6} key={i}>
              <Link href={'/categories/1'} >
                <Category />
              </Link>
            </Col>)}
          </Row>
          <h5 className='text-uppercase text-dark mt-5'>Danh mục random</h5>
          <Row>
            {Array(5).fill(0).map((i, item) => <Col md={3} sm={6} xs={6} key={i}>
              <Link href={'/categories/1'} >
                <Category />
              </Link>
            </Col>)}
          </Row>
          <Reward />
        </Container>
      </MainLayout>
    </div>
  )
}
