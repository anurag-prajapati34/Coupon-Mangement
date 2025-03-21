import React, { useContext, useEffect, useState } from 'react'

import { CouponContext } from '../../contexts/CouponContext';
import AddCouponForm from '../../components/admin/AddCouponForm';
import CouponCard from '../../components/admin/CouponCard';
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {

  const [isLoading,setLoading]=useState(false);
  const [coupons,setCoupons]=useState([]);
  const {setIsAddCouponForm,iseAdminLogined}=useContext(CouponContext)
  const navigate=useNavigate();

  const fetchAllCoupons=async()=>{
    setLoading(true);
    const response =await fetch(`${import.meta.env.VITE_SERVER_URL}/api/coupons/all`);
    const responseData=await response.json();
 
    if(response.ok){
      setCoupons(responseData?.coupons)
      setLoading(false);
    }
 

  }
useEffect(()=>{
  fetchAllCoupons();
},[]);



useEffect(()=>{
  if(!iseAdminLogined){
    navigate('/');
  }
})
if(isLoading){
  return <div>Loading...</div>
}
  return (

    <div>

      <div className='w-full flex justify-between items-center'>
        <h1 className='text-4xl font-bold text-black'>Admin Dashboard</h1>
        <button onClick={()=>setIsAddCouponForm(true)} className='px-4 py-2 bg-black text-white font-semibold rounded-md '>Add Coupons</button>

      </div>


      
    <div className='flex gap-4 flex-wrap mt-6'>{
      
    coupons.length==0?<div className='text-2xl font-bold text-black w-full min-h-[100vh] flex items-center justify-center'>No Coupons yet</div>:  coupons?.map((coupon)=>{
      return <CouponCard key={coupon._id} coupon={coupon}/>

    })
      }</div>

      <AddCouponForm />
    </div>
  )
}
