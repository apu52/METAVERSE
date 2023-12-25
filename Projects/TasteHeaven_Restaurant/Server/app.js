const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");
const Cart = require("./models/cartModel");
const Address= require('./models/addressModel');
const Order = require("./models/orderModel");

dotenv.config({ path: "./.env" });
const URI = process.env.DATABASE;
const PORT=process.env.PORT||5000;
const mongoose = require("mongoose");
mongoose.connect(URI).then(() => {
  console.log("Connected Successfully");
  app.listen(PORT, () => {
    console.log("listening on port 5000...");
  });
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("<h1>Welcome</h1>");
});

app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const res1 = await User.findOne({ email: email });

  if (res1) {
    return res.json("exist");
  } else {
    const user = User({
      name: name,
      email: email,
      password: password,
    });
    await user.save();
    return res.json("doesnt exist");
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const res1 = await User.findOne({ email: email });
  const res2 = await User.findOne({ password: password });
  if (res1) {
    if (res2) {
      return res.json({ message: "LoggedIn", name: res2.name });
    } else {
      return res.json("incorrectPassword");
    }
  } else {
    return res.json("notregistered");
  }
});

app.post("/api/add-to-cart", async (req, res) => {
  

  const email=req.query.email;
  const resnew = await Cart.findOne({ email: email });
  // console.log(name,email,password,title,url,desc,price,id);
  const {id,title,description,price,url}=req.body;
  const user=await User.findOne({ email: email})
  const{name}=user;
  let i = 0;

  if (resnew) {
    // console.log(res1);
    resnew.food.map(async(singlefood) => {
      if (Number(singlefood.id) == Number(id)) {
        let a = singlefood.quantity;
        a = Number(a);
        a = a + 1;

        singlefood.quantity = a;
        resnew.Total_Price=Number(resnew.Total_Price)+ Number(singlefood.price);
        i = 1;
        await resnew.save();
        // console.log(res1.Total_Price);
        console.log("Data stored successfully");
       return res.json( {
          message: "quantity-increased",
          title: singlefood.title,
          quantity: singlefood.quantity,
        });

      
      }
    });
   
    if (i != 1) {
      const resnew1 = await Cart.findOne({ email: email });
      const {id,title,description,price,url}=req.body;
      const user=await User.findOne({ email: email})
    
      // console.log(res1);
      resnew1.food.push({
        id: id,
        title: title,
        url: url,
        description: description,
        price: price,
        quantity: 1,
      });
      // console.log(res1);
      resnew1.Total_Price = Number(resnew1.Total_Price)+Number(price);
      await resnew1.save();
      // console.log(res1.Total_Price);
      console.log("Data stored successfully");
     return res.json({ message: "new-food-added", title: title });
    }
  }
 
  else{ 
   
      const {id,title,description,price,url}=req.body;
      const user=await User.findOne({ email: email})
      const{name}=user;
    const cart = new Cart({
      name: name,
      email: email,
      Total_Price:Number(price),
      food: [
        {
          id: id,
          title: title,
          url: url,
          description: description,
          price: price,
          quantity: 1,
          
        },
      ],
    });
    await cart.save();
    console.log(cart.Total_Price);
    console.log("Data stored successfully");
  return res.json({ message: "new-user-first-item", title: title });
  }
}
);

app.get("/api/add-to-cart", async (req, res) => {
    console.log(req.query.name);
  const data = await Cart.findOne({ email: req.query.name});
  if(data==null)
  {
    const user=await User.findOne({ email: req.query.name});
    console.log(user);
    return res.json(user);
  }
  else{
    console.log(data);
    return res.json(data);
  }
 
});

app.put('/api/remove-from-cart', async (req, res) => {
  const email=req.query.email;
  const {id}=req.body;
  const resnew = await Cart.findOne({ email:email });
  resnew.food.map(async(singleFood)=>{
    if(singleFood.id==id)
    {
      const a=Number(singleFood.quantity)
      if(a>1)
      {
      singleFood.quantity=a-1;
      await resnew.save();
      console.log('food decreased by one');
      return res.json('Food quantity decreased');
    }
    else{
      const index=resnew.food.indexOf(singleFood);
      resnew.food.splice(index,1);
      await resnew.save();
      console.log('food item removed');
      return res.json('Food item removed');
    }
  }
  })
})

app.post('/api/address',async(req,res)=>{
  console.log(req.body);
  const email=req.query.email;
  // console.log(email);
  

  // const resUser= await User.findOne({email:email});
  const user=await Address.findOne({email:email});
  if(user){
    await Address.deleteMany({ email:email }).then(function(){
      console.log("previous addresses if present deleted of the same user "); 
   }).catch(function(error){
      console.log(error); 
   });
  }
  
    const {flatno,landmark,contact,address}=req.body;
  const userAddress= new Address({
    email:email,
    flatno:flatno,
    contact:contact,
    address:address,
    landmark:landmark,

  })
  await userAddress.save();
  console.log("address saved");
  return res.json("POSTED SUCCESSFULLY");


})

app.get('/api/address',async(req,res)=>{
// console.log(req.query.email);
const email=req.query.email;
const user= await User.findOne({email:email});
const userAddress= await Address.findOne({email:email});
const food=await Cart.findOne({email:email});
// console.log(user, address, food);
const {flatno,contact,address,landmark}=userAddress
if(food){
console.log("sent successfully")
return res.json({name:user.name,food:food.food,flatno:flatno,contact:contact,address:address,landmark:landmark,Total_Price:food.Total_Price});}

});

app.post('/api/order',async(req,res)=>{
 
  const {email,order_id}=req.body;
  const response=await Cart.findOne({email:email});
  const foodArray=response.food;
  const Total_Price=response.Total_Price;
  const userAddress=await Address.findOne({email:email});
  const {flatno,contact,address,landmark}= userAddress;

  // console.log(flatno,contact,landmark,address)
 // getting date and time of post/order placed
  var today = new Date();
  var date = today.toLocaleDateString();

  console.log(date);
  const time=new Date().toLocaleTimeString(undefined,{timezone:"Asia/Kolkata"});
  console.log(time);
 
  // console.log(email,order_id,foodArray,Total_Price,userAddress)
  const order=new Order({
    email:email,food:foodArray,Total_Price:Total_Price,order_id:order_id,date:date,time:time,flatno:flatno,contact:contact,order_id:order_id,address:address,landmark:landmark
  })
  
await order.save();
await Cart.deleteOne({email:email});
console.log("order placed successfully")
return res.json('order placed success');
})


app.get('/api/order', async(req, res) => {
const email = req.query.email;
const order_id = req.query.order_id;
console.log(order_id);
  const user= await User.findOne({email:email});
  const {name}=user;

  const userAddress=await Address.findOne({email:email});
  console.log(userAddress);
  const {flatno,address,contact,landmark}=userAddress;
  
  const order= await Order.findOne({email:email,order_id:order_id});
  console.log(order);
 
  const{food,Total_Price,date,time}=order;
  console.log('sent');
  return res.json({name:name,flatno:flatno,address:address,landmark:landmark,food:food,order_id:order_id,Total_Price:Total_Price,contact:contact,date:date,time:time});

})

app.get('/api/profile', async(req,res) => {
  const email=req.query.email;
  const {name,picture}= await User.findOne({email:email});
const orderArray= await Order.find({email:email});
const {contact}=await Address.findOne({email:email});
  console.log("Profile sent");
 return res.json({orderArray:orderArray,name:name,email:email,contact:contact,picture:picture});

})
app.post("/api/profile",async(req,res)=>{
  const {email}=req.query;

  const user=await User.findOne({email:email});
  user.name=req.body.name;
  user.contact=req.body.contact;

  await user.save();
  const cart= await Cart.findOne({email:email});
 
  if(cart)
  {
    cart.name=req.body.name;
    await cart.save();
  }
  console.log(cart);
  return res.json("updated");
})
app.put("/api/image", async (req, res) => {
  const { email, picture } = req.body;
  console.log(picture);
  const imageUpdate = await User.findOne({ email: email });
  console.log(imageUpdate);
  imageUpdate.picture = picture;
  imageUpdate.save();
  return res.json("image Uploaded succesfully");
});
