import React, { useEffect } from 'react'
import {toast} from 'react-hot-toast'
const CouponCard = ({coupon}) => {
  const { code, discount,isAvailable, expiry, description, minorder ,isActive} = coupon;
  
  const convertToIST = (utcDateString) => {
    const date = new Date(utcDateString);
    return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
};



const handleClaim=async ()=>{
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/coupons/claim`);
  const responseData = await response.json();
 
  if (response.ok) {

    const claimedCoupon= responseData?.coupon;
   toast.success("Free Coupon Claimed Successfully !")
    setLoading(false);
  }else{
   toast.error(responseData.response);
  }


}

  return (
    <div className="admin-coupon-card border p-4 rounded-lg shadow-md bg-white flex flex-col gap-2 flex-1 sm:min-w-[500px] text-start">
            <span className='flex gap-2 items-center '>
                <h2 className="text-2xl font-bold text-gray-800">{code}</h2>
                <span className={`${isAvailable ? 'bg-blue-500' : 'bg-green-400'} rounded-full px-4 py-1 text-sm text-white`}>{isAvailable ? "Not Claimed" : "Calimed"}</span>
            </span>
            <p className="text-gray-600">{discount}% off on orders above ₹{minorder}</p>
            <p className="text-sm text-gray-500">Expires: {convertToIST(expiry)}</p>
            <button onClick={handleClaim} className="px-3 py-1 flex-1 bg-black text-white rounded-md hover:bg-green-700">
            Claim
                </button>

      
        </div>
  )
}

export default CouponCard