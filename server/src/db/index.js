const mongoose = require("mongoose");
MONGODB_URI='mongodb+srv://soni03suhani:mjTK7dSrlSIAx5RC@cluster0.enp0wjg.mongodb.net/NotesCS';
mongoose
.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database connected successfully!")
}).catch((error)=>{
    console.log("Error in connecting Database!",error);
})