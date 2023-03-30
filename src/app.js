const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.port || 3500;
                                                  
                                                                                       
const staticPath= path.join(__dirname,"../src")
const viewPath= path.join(__dirname,"../templates")
const partialPath= path.join(__dirname,"../templates/partials")
                               
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
                                     
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
           
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
      
hbs.registerPartials(partialPath);
    
app.get("/",(req,res)=>{
            
    res.render("index.hbs");
})   
 app.get("/Skills",(req,res)=>{
    
    res.render("Skills.hbs");
 })
 app.get("/friends",(req,res)=>{
  
     res.render("friends.hbs");
 })
 app.get("/shadowarmy",(req,res)=>{
     
     res.render("shadowarmy.hbs");
 }) 
 app.get("/monarchs",(req,res)=>{
    
    res.render("monarchs.hbs");
})  
    
//  const hiddenelement= document.querySelectorAll('.hidden');
//  hiddenelement.forEach((el) => observer.observe(el));
 
//  const observer = new IntersectionObserver((entries) => {
//      entries.forEach((entry) => {
//          console.log(entry)
//          if(entry.isIntersecting) {
//              entry.target.classList.add('show');
//          } else{
//              entry.target.classList.remove('show');
//          }
//          } 
//      )
//      })
  
 


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})