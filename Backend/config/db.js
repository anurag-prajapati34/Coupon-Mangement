const mongoose =require('mongoose');


async function connectDB(){
    console.log(`mongodb link `)
    try{

        const conn=await mongoose.connect(`${process.env.MONGO_URI}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,

            
            
        })

        console.log("MONGODB Connected",conn.connection.host)
    
    }
    catch(error){

        console.log("Erro:",error);
        process.exit(1);
    }
}

module.exports=connectDB;