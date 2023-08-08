const mongoose= require('mongoose');

const dbConnection= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            //useCreateIndex:true,
            //useFindAndModify:false
        })
        console.log('DB: MONGO')
    }catch(err){
        console.log(err)
    }
}

module.exports={
    dbConnection
}