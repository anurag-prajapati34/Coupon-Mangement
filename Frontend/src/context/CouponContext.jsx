import { createContext, useState } from "react";
import { toast } from 'react-hot-toast'

export const CouponContext = createContext();

export const CouponContextProvider = ({ children }) => {

    const [iseAdminLogined, setAdminLogined] = useState(false)
    const [isAddCouponForm, setIsAddCouponForm] = useState(false);
    const [isEditCouponForm, setIsEditCouponForm] = useState(false);



    const handleAdminLogin = async (loginCredentials) => {

        const { name, email, password } = loginCredentials;

        if (name != '' && email != '' && password != '') {


            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/admin/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    name,
                    email,
                    password

                })

            });

            if (response.ok) {
                const user = await response.json();
                setAdminLogined(true);
                toast.success("Logined Successfully !")
            } else {
                toast.error("Wrong Email or Password")

            }






        }
    }


    return <CouponContext.Provider value={{
        handleAdminLogin,
        iseAdminLogined,
        isAddCouponForm,
        setIsAddCouponForm,
        isEditCouponForm,
        setIsEditCouponForm
    }}>

        {children}

    </CouponContext.Provider>
}

