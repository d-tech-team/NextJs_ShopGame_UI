import { Card } from "react-bootstrap"
import styles from './index.module.scss'
import { BarChart, BoxArrowInRight, ChevronBarRight, ChevronRight, Coin, PersonAdd, PersonCircle } from "react-bootstrap-icons"
import Link from "next/link"

const menu = [
   {
      label: 'Thông tin tài khoản',
      icon: <PersonCircle />,
      path: "/user/infor"
   },
   {
      label: 'Biến động số dư',
      icon: <BarChart />,
      path: "/user/blance"
   },
   {
      label: 'Lịch sử nạp tiền',
      icon: <PersonAdd />,
      path: "/user/recharge-history"
   },
   {
      label: 'Tài khoản đã mua',
      icon: <Coin />,
      path: "/user/purchase-history"
   },

]

export default () => {
   return <div className={styles.LeftMenu}>
      <Card className="p-3">
         <div className={styles.LeftMenu__Infor}>
            <div>
               <img src="/images/avatar-default.jpg" alt="" />
            </div>
            <div>
               <ul>
                  <li>
                     Le Tien Dat
                  </li>
                  <li>Email: <span> lctiendat@gmail.com</span> </li>
                  <li>Số dư: <span>10.000đ</span> </li>
               </ul>
            </div>
         </div>
      </Card>
      <Card className="p-3 mt-3 text-uppercase">
         <h6>Menu</h6>
      </Card>
      <Card className={`${styles.LeftMenu__Menu} p-3 mt-3`}>
         <ul>
            {Array.isArray(menu) && menu.map((item, i) =><Link href={item.path}> <li key={i}>  {item.icon} <p>{item.label}</p> <ChevronRight /> </li></Link>)}
         </ul>
      </Card>
      <Card className={`${styles.LeftMenu__Menu} p-3 mt-3`}>
         <ul>
            <li> <BoxArrowInRight /> <p> Đăng xuất</p> <ChevronRight /> </li>
         </ul>
      </Card>
   </div>
}