const app=require('express')();
const server=require('http').createServer(app);
const process=require('process');
const cors=require('cors')
const io=require('socket.io')(server,{
    cors:{
        origin:"*",
        methods:["GET", "POST"],
    }
})

app.use(cors());

const PORT= 5000;

app.get('/', (req, res)=>{

    res.send('server is running');
})

io.on('connection',(socket)=>{
 
    socket.emit('me',socket.id);

    socket.on('disconnect',()=>{
        socket.broadcast.emit('callended');
    })

    socket.on('calluser',({userToCall,signal,from,name})=>{
        // console.log(userToCall,signal,from,name);
        io.to(userToCall).emit("calluser",{signal:signal,from,name});
    });

    socket.on("answercall",(data)=>{
        // console.log(data);
        io.to(data.to).emit('callaccepted',data.signal);
    })
})
server.listen(PORT,()=>{

    console.log(`server is listening on port ${PORT}`);
})