const Coupon = require("../models/coupon");
const IpCooldown = require("../models/ipCooldown");
const generateUniquerCouponCode = (length = 8) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";

  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return code;
};

const createCoupon = async (req, res) => {
  try {
    const { code, discount, expiry, description, minorder } = req.body;

    const newCoupon = await Coupon({
      code,
      discount,
      expiry,
      description,
      minorder,
    });

    await newCoupon.save();

    return res
      .status(200)
      .json({ response: "Coupon Successfully created", coupon: newCoupon });
  } catch (error) {
    console.log("Error creating coupon", error);

    return res.status(500).json({ response: "Internal Server Error !" });
  }
};

const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    if (!coupons) {
      return res.status(500).json({ Error: "Error" });
    }

    return res.status(200).json({ coupons: coupons });
  } catch (error) {
    console.log("Error Getting all coupons", error);
    return res.statis(500).json({ Error: "Inernal Server Error !" });
  }
};

const claimCoupon = async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
   
 
  
    
    const isClaimedPreviously = await IpCooldown.findOne({ ip });
   
    if (isClaimedPreviously) {
      const timeElapsed = Date.now() - new Date(isClaimedPreviously.lastClaimedAt).getTime();
      
      if (timeElapsed < 86400000) {
        console.log("too many request")
        return res.status(429).json({ response: "Already calimed your free coupon !" });
      }
    }

    const couponToAssign = await Coupon.findOne({ isAvailable: true });

    if (!couponToAssign) {
      return res.status(404).json({ reponse: "No Available Coupons" });
    }

    const updateAssignedCoupon = await Coupon.findOneAndUpdate(
      {
        _id: couponToAssign._id,
      },
      {
        $set: {
          isAvailable: false,
          claimedBy: ip,
          claimedAt: Date.now(),
        },
      },
      {
        new: true,
      }
    );

    const updateIp = await IpCooldown.findOneAndUpdate(
      { ip: ip },
      { lastClaimedAt: Date.now() },
      { upsert: true }
    );

    console.log("updateIp->", updateIp);

    return res.status(201).json({ coupon: updateAssignedCoupon });
  } catch (error) {
    console.log("Error Getting all coupons", error);
    return res.statis(500).json({ response: "Inernal Server Error !" });
  }
};

const deleteCoupon = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedCoupon = await Coupon.findOneAndDelete({ _id: id });

    return res.status(200).json({ reponse: "Deleted Successfully" });
  } catch (error) {
    console.log("Error deleting coupon", error);
    return res.statis(500).json({ response: "Inernal Server Error !" });
  }
};

const editCoupon = async (req, res) => {
  try {
    const { id, code, discount, expiry, description, minorder } = req.body;
    const editedCoupon = await Coupon.findByIdAndUpdate(
      { _id: id },
      {
        code,
        discount,
        expiry,
        description,
        minorder,
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ reponse: "updated Successfully", editedCoupon: editedCoupon });
  } catch (error) {
    console.log("Error updating coupon", error);
    return res.statis(500).json({ response: "Inernal Server Error !" });
  }
};

const toggleEnableDisable=async (req,res)=>{

  try {
    const { id, isActive } = req.body;
    const updatedCoupon = await Coupon.findByIdAndUpdate(
      { _id: id },
      {
        isActive
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ reponse: "updated Successfully", updatedCoupon: updatedCoupon });
  } catch (error) {
    console.log("Error updating coupon", error);
    return res.statis(500).json({ response: "Inernal Server Error !" });
  }


}

module.exports = {
  createCoupon,
  claimCoupon,
  getAllCoupons,
  deleteCoupon,
  editCoupon,
  toggleEnableDisable
};
