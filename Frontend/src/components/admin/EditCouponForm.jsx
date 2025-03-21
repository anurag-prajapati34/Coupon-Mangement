import React, { useContext, useEffect, useState } from 'react'
import { CouponContext } from '../../contexts/CouponContext';
import toast from 'react-hot-toast';

const EditCouponForm = ({ couponToEdit, isEdit }) => {
    const { isEditCouponForm, setIsEditCouponForm } = useContext(CouponContext);
    const [couponDetails, setCouponDetails] = useState({
        code: '',
        discount: '',
        expiry: '',
        description: '',
        minorder: '',

    })

   

    const handleCouponDetails = (e) => {
        const { name, value } = e.target;
        setCouponDetails((prev) => ({ ...prev, [name]: value }))
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const { code, discount, expiry, description, minorder } = couponDetails;
        if (code && discount && expiry && description && minorder) {


            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/coupons/edit`, {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: couponToEdit?._id,
                    code,
                    discount,
                    expiry,
                    description,
                    minorder



                })
            })

            if (response.ok) {
                
               
               
                toast.success("Coupon updated successfully !")
            } else {
                toast.error("Unexpected error");
            }


        } else {
            toast.error("Please fill all fields");
        }

    }

    useEffect(() => {


        if (couponToEdit && isEdit) {
            const { code,
                discount,
                expiry,
                description,
                minorder } = couponToEdit;

            setCouponDetails({
                code,
                discount,
                expiry,
                description,
                minorder
            })
        }
    }, [isEdit, couponToEdit])

    return (
        <div className={`bg-[#7e7e7f53] w-full fixed top-0 left-0 h-screen overflow-y-auto flex items-center justify-center p-4 ${isEditCouponForm ? 'visible' : 'hidden'}`}>


            <div on className='md:w-[848px] w-[90vw] max-h-[90vh] overflow-y-auto rounded-[16px] drop-shadow-sm bg-white z-10 p-4 md:p-10'>

                <h1 className='font-bold text-2xl'>Update this coupon</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 md:gap-4 mt-5'>
                    <div className='flex md:flex-nowrap flex-wrap w-full justify-between items-center gap-4'>
                        <div className='text-start w-full '>
                            <label htmlFor='code ' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Coupon Code
                            </label>
                            <input value={couponDetails.code} onChange={handleCouponDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[58px] ' placeholder='ABCXYZ438CEX' id='code' name='code' type='text' alt='coupon code' />
                        </div>

                    </div>


                    {/** */}
                    <div className='flex flex-wrap md:flex-nowrap w-full justify-between items-center gap-4'>
                        <div className='text-start  w-full md:w-1/2'>
                            <label htmlFor='minorder' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Min order
                            </label>


                            <span className='flex felx-1 gap-1 items-center border-[1px] border-[#222222] rounded-[10px] p-[12px]  h-[58px] overflow-hidden'>

                                <input value={couponDetails.minorder} onChange={handleCouponDetails} className='outline-none  h-full' placeholder={'₹500'} id='minorder' name='minorder' type='number' alt='minorder' />
                            </span>





                        </div>
                        <div className='text-start  w-full md:w-1/2'>
                            <label htmlFor='expiry' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                                Expiry
                            </label>
                            <input value={couponDetails.expiry} onChange={handleCouponDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[58px]' placeholder='01-01-2025' id='expiry' name='expiry' type='date' alt='expiry' />
                        </div>
                    </div>
                    <div className='text-start  w-full '>
                        <label htmlFor='discount' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                            Discount
                        </label>


                        <span className='flex w-full gap-1 items-center border-[1px] border-[#222222] rounded-[10px] p-[12px]  h-[58px] overflow-hidden '>

                            <input value={couponDetails.discount} max={100} min={0} onChange={handleCouponDetails} className='outline-none w-full h-full' placeholder={'20% '} id='discount' name='discount' type='number' alt='discount' />
                        </span>



                    </div>

                    <div className='text-start w-full'>
                        <label htmlFor='description' className='text-xl font-semibold text-[#636363] mb-[6px]'>
                            Description
                        </label>
                        <textarea value={couponDetails.description} onChange={handleCouponDetails} className='border-[1px] border-[#222222] rounded-[10px] p-[12px] w-full h-[100px] max-h-[100px]' placeholder='sort description' id='description' name='description' >

                        </textarea>
                    </div>


                    <div className='flex w-full gap-2 items-center '>
                        <button type='submit' className='h-[59px] bg-black rounded-[10px]   text-xl font-semibold text-white flex-1 '>
                            Update
                        </button>
                        <button onClick={() => setIsEditCouponForm(false)} type='button' className='h-[59px] border-2 border-black rounded-[10px]  text-xl font-semibold text-black flex-1 s'>
                            close
                        </button>
                    </div>

                </form>

            </div>


        </div>
    )
}

export default EditCouponForm