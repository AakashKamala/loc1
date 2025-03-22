const express=require("express")
const app=express()

app.get("/", (req, res) => {
    const ip = req.connection.remoteAddress.replace(/^::ffff:/, ""); // Normalize IPv4-mapped IPv6 addresses
    console.log(ip);
    res.send("Hello World");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
}
)