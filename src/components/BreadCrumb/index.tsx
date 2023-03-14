import { Breadcrumb } from "react-bootstrap"
import styles from './index.module.scss'
import Link from "next/link"


export default ({ data }) => {
    return <Breadcrumb className={styles.BreadCrumb}>

        <Breadcrumb.Item className={styles.BreadCrumb__item}> <Link href={'/'}> Trang chủ</Link> </Breadcrumb.Item>
        {
            Array.isArray(data) && data.map((obj, i) => <Breadcrumb.Item key={i} className={styles.BreadCrumb__item}> <Link href={obj.path}> {obj.label}</Link> </Breadcrumb.Item>)
        }
    </Breadcrumb>
} 