const mongoose = require("mongoose");

//coupon schema
const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },

    claimedAt: {
      type: Date,
      default: null,
    },
    claimedBy: {
      type: String,
      default: null,
    },
    claimedBySession: {
      type: String,
      default: null,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    discount: {
      type: Number,
    },

    expiry: {
      type: Date,
    },
    description: {
      type: String,
    },
    minorder: {
      type: Number,
      type: String,
    },
    isActive:{
        type:Boolean,
        default:true,
    }
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.model("Coupon", couponSchema);
module.exports = Coupon;
