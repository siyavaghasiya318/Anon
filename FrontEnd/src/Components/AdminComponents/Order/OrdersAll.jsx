import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'

const OrdersAll = () => {
  const{showAllOrders} = useContext(UserContext)
  console.log("showallorders",showAllOrders);
  
  return (
    <div>OrdersAll</div>
  )
}

export default OrdersAll