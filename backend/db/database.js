const { default: mongoose } = require('mongoose');
const DB = "mongodb+srv://avez-mern-2023:mern2023@cluster0.vkg2kmb.mongodb.net/?retryWrites=true&w=majority"

const connectDatabase = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(DB,{
        useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})
}

module.exports = connectDatabase