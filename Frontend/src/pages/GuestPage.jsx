
import { LuGift, LuIdCard, LuWalletCards } from 'react-icons/lu'
import { Header } from '../components/Header'
import CouponCard from '../components/CouponCard'
import React, { useContext, useEffect, useState } from 'react'
const GuestPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);


  const fetchAllCoupons = async () => {
    setLoading(true);
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/coupons/all`);
    const responseData = await response.json();
   
    if (response.ok) {
      setCoupons(responseData?.coupons)
      setLoading(false);
    }


  }
  useEffect(() => {
    fetchAllCoupons();
  }, []);









  if (isLoading) {
    return <div>Loading...</div>
  }








  return (
    <div className='w-full flex flex-col items-center'>
      <Header />
      <div className=' w-full  p-4 mt-6 text-start'>

        <span className='flex items-center font-bold text-3xl gap-1'>     <LuGift /> Claim your free coupon now</span>
        <p className='text-gray-600 font-semibold mt-4'>Get unique coupen code ! limited to one claim per IP address  every 24 hours</p>



      </div>

      <div className='flex w-full items-start justify-start gap-4 flex-wrap mt-6'>{

        coupons?.map((coupon) => {

          if (coupon.isActive) {
            return <CouponCard key={coupon._id} coupon={coupon} />
          }


        })
      }</div>

    </div>
  )
}

export default GuestPage