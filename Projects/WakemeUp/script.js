var sn=new Audio("ala3.mp3"), hr, mr, lr_list=[],i=0

document.getElementById("s1").addEventListener("click",function () {
   sn=new Audio("ala1.wav")
   document.getElementById("s1").classList.add("sts")
   document.getElementById("s2").classList.remove("sts")
   document.getElementById("s3").classList.remove("sts")
   document.getElementById("s4").classList.remove("sts")
})

document.getElementById("s2").addEventListener("click",function () {
   sn=new Audio("ala2.wav")
   document.getElementById("s2").classList.toggle("sts")
   document.getElementById("s1").classList.remove("sts")
   document.getElementById("s3").classList.remove("sts")
   document.getElementById("s4").classList.remove("sts")
})

document.getElementById("s3").addEventListener("click",function () {
   sn=new Audio("ala3.mp3")
   document.getElementById("s3").classList.toggle("sts")
   document.getElementById("s2").classList.remove("sts")
   document.getElementById("s1").classList.remove("sts")
   document.getElementById("s4").classList.remove("sts")
})

document.getElementById("s4").addEventListener("click",function () {
   sn=new Audio("ala4.mp3")
   document.getElementById("s4").classList.toggle("sts")
   document.getElementById("s2").classList.remove("sts")
   document.getElementById("s3").classList.remove("sts")
   document.getElementById("s1").classList.remove("sts")
})
console.log(sn)
document.getElementById("play").addEventListener("click",function (params) {
   sn.play()
})

document.getElementById("stop").addEventListener("click", function () {
   sn.pause()
})

document.getElementById("set").addEventListener("click", function (evt) {
   evt.preventDefault()
   hr = parseInt(document.getElementById("hr").value);
   mr = parseInt(document.getElementById("mr").value);

   document.getElementById("hr").value = ""
   document.getElementById("mr").value = ""
   
   lr_list.push(hr+mr)
   console.log(lr_list)
   var l_item=document.createElement("div")
   l_item.className="card"
   l_item.style="width: 18rem"

   var l_div=document.createElement("div")
   l_div.className="card-body"
   l_div.innerHTML=`Alarm at ${hr}.${mr}`
   l_item.appendChild(l_div)

   var l_rm=document.createElement("button")
   l_rm.className="btn btn-danger fa-solid fa-trash"
   l_rm.addEventListener("click",function(e,hr,mr){
         var rm_item=e.target.parentElement
         rm_item.remove()
   })
   l_item.appendChild(l_rm)
   document.getElementById("alarm_list").prepend(l_item)
})
function show() {

   var a = new Date()
   var h = a.getHours()
   var m = a.getMinutes()
   var s = a.getSeconds()
   document.getElementById("time").innerHTML = h +" : "+ m +" : "+ s
   if (mr == m && hr == h && s==0)
    sn.play()
   document.getElementById("stop").addEventListener("click", function () {
      sn.pause()
   })

}
setInterval(() => {
   show()
}, 1000);
show()

