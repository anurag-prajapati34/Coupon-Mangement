const express =require('express')
const {getAllCoupons,createCoupon,claimCoupon, deleteCoupon, editCoupon, toggleEnableDisable} =require('../controllers/couponsController');

const router =express.Router();


router.get('/all',getAllCoupons);
router.post('/add',createCoupon);
router.get('/claim',claimCoupon);
router.delete('/delete',deleteCoupon);
router.put('/edit',editCoupon);
router.put('/toggle',toggleEnableDisable);//handles toggling between disable & enable 

module.exports=router;