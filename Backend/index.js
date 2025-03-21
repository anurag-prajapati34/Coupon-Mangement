const express =require('express');
const mongoose =require('mongoose');
const connectDB = require('./config/db');
const couponRoutes= require('./routes/couponRoutes')
const userRoutes=require('./routes/userRoutes')
const cors =require('cors')
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json())

//connect mongodb
connectDB();

//routes

app.use('/api/coupons',couponRoutes);
app.use('/api/admin',userRoutes);

//PORT
const PORT=process.env.PORT||8000

//Starting server
app.listen(PORT,()=>console.log("SERVER STARTED AT PROT =>",PORT));