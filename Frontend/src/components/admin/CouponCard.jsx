import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CouponContext } from '../../context/couponContext';
import EditCouponForm from './EditCouponForm';
import toast from 'react-hot-toast';



const CouponCard = ({ coupon }) => {
    const { code, discount,isAvailable, expiry, description, minorder ,isActive} = coupon;
    const navigate=useNavigate();
    const {isEditCouponForm, setIsEditCouponForm }=useContext(CouponContext);
    const [isActiveSatus,setActivStatus]=useState(isActive);



    const convertToIST = (utcDateString) => {
        const date = new Date(utcDateString);
        return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    };

    const deleteCoupon=async (id)=>{
        const response =await fetch(`${import.meta.env.VITE_SERVER_URL}/api/coupons/delete`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id:id
            })
        });



    if(response.ok){
   toast.success("Coupon deleted successfully !")
    }
 

    }

    const handleToggle=async()=>{

        handleToggleEnableDisable(!isActiveSatus);

        setActivStatus((prev)=>(!prev))



    }

    const handleToggleEnableDisable = async (toggleStatus) => {
 
    
      



            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/coupons/toggle`, {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id:coupon?._id,
                    isActive:toggleStatus



                })
            })

            if (response.ok) {
              
               const updatedCoupon=await response.json();
              toast.success(`${updatedCoupon.isActive?"Coupon Enabled":"Coupon Disabled"}`)
              setActivStatus(updatedCoupon.isActive);
            } else {
                toast.error("Unexpected error")
            }


     

    }




    return (

        <div className={`admin-coupon-card border p-4 rounded-lg shadow-md ${isActiveSatus?'bg-white':'bg-gray-200'} flex flex-col gap-2 flex-1 sm:min-w-[500px] text-start`}>
            <span className='flex gap-2 items-center '>
                <h2 className="text-2xl font-bold text-gray-800">{code}</h2>
                <span className={`${isAvailable ? 'bg-blue-500' : 'bg-green-400'} rounded-full px-4 py-1 text-sm text-white`}>{isAvailable ? "Not Claimed" : "Calimed"}</span>
            </span>
            <p className="text-gray-600">{discount}% off on orders above ₹{minorder}</p>
            <p className="text-sm text-gray-500">Expires: {convertToIST(expiry)}</p>

            <div className="flex justify-between mt-3 gap-4">
                <button onClick={()=>setIsEditCouponForm(true)} className="px-3 py-1 flex-1 bg-black text-white rounded-md hover:bg-green-700">
                    Edit
                </button>
                <button onClick={()=>deleteCoupon(coupon?._id)} className="px-3 py-1 flex-1 border-2 border-black text-black rounded-md hover:bg-red-700">
                    Delete
                </button>
                <button onClick={()=>handleToggle()} className="px-3 py-1 flex-1 border-2 border-black text-black rounded-md hover:bg-gray-700">
                    {isActiveSatus ? "Disable" : "Enable"}
                </button>
            </div>

            <EditCouponForm  couponToEdit={coupon} isEdit={true}/>
        </div>

    )
}

export default CouponCard