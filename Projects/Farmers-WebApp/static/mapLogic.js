window.addEventListener('load',()=>{
    const logos = ['../images/topic1.png', '../images/topic2.png', '../images/topic3.png'];
    const logoImg = document.getElementById('img1');
    
    let currentIndex = 0;
    
    function changeLogo() {
      logoImg.classList.remove('fade-in');
      logoImg.src = logos[currentIndex];
      logoImg.classList.add('fade-in');
      currentIndex = (currentIndex + 1) % logos.length;
    }
    
    setInterval(changeLogo, 2000);
})
var mapObj;
function showMap(context){
  mapObj=document.getElementById('mapouter')
  switch(context.value){
    case "default":
      mapObj.remove()
      var newDiv = document.createElement("div");
      newDiv.className = "mapouter";
      newDiv.id="mapouter"
      newDiv.innerHTML="<div class='gmap_canvas'><iframe width='100%' height='100%' id='gmap_canvas' src='https://maps.google.com/maps?q= kolhapur district&t=&z=12&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe><a href='https://2yu.co'>2yu</a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href='https://embedgooglemap.2yu.co/'>html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div>"
      document.body.appendChild(newDiv);
      break;
    case "fertilizerS":
      mapObj.remove()
      var newDiv = document.createElement("div");
      newDiv.className = "mapouter";
      newDiv.id="mapouter"
      newDiv.innerHTML="<div class='gmap_canvas'>  <iframe width='1005' height='1213' id='gmap_canvas' src='https://maps.google.com/maps?q=fertilizer shops in kolhapur district---&t=&z=12&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>  <a href='https://2yu.co'>2yu</a> <br>     <style>.mapouter{position:relative;text-align:right;height:1213px;width:1005px;}</style>      <a href='https://embedgooglemap.2yu.co'>html embed google map</a>      <style>.gmap_canvas {overflow:hidden;background:none!important;height:1213px;width:1005px;}  </style>  </div>"
      document.body.appendChild(newDiv);

      break;
    case "equipmentS":
      mapObj.remove()
      var newDiv = document.createElement("div");
      newDiv.className = "mapouter";
      newDiv.id="mapouter"
      newDiv.innerHTML="<div class='gmap_canvas'><iframe width='100%' height='100%' id='gmap_canvas' src='https://maps.google.com/maps?q= fertilizer shops in kolhapur district&t=&z=12&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe><a href='https://2yu.co'>2yu</a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href='https://embedgooglemap.2yu.co/'>html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div>"
      document.body.appendChild(newDiv);
      break;
    case "seedS":
      mapObj.remove()
      var newDiv = document.createElement("div");
      newDiv.className = "mapouter";
      newDiv.id="mapouter"
      newDiv.innerHTML="<div class='gmap_canvas'>  <iframe width='1005' height='1213' id='gmap_canvas' src='https://maps.google.com/maps?q=fertilizer shops in kolhapur district---&t=&z=12&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>  <a href='https://2yu.co'>2yu</a> <br>     <style>.mapouter{position:relative;text-align:right;height:1213px;width:1005px;}</style>      <a href='https://embedgooglemap.2yu.co'>html embed google map</a>      <style>.gmap_canvas {overflow:hidden;background:none!important;height:1213px;width:1005px;}  </style>  </div>"
      document.body.appendChild(newDiv);
      break;
    case "testC":
      mapObj.remove()
      var newDiv = document.createElement("div");
      newDiv.className = "mapouter";
      newDiv.id="mapouter"
      newDiv.innerHTML="<div class='gmap_canvas'>  <iframe width='1005' height='1213' id='gmap_canvas' src='https://maps.google.com/maps?q=fertilizer shops in kolhapur district---&t=&z=12&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>  <a href='https://2yu.co'>2yu</a> <br>     <style>.mapouter{position:relative;text-align:right;height:1213px;width:1005px;}</style>      <a href='https://embedgooglemap.2yu.co'>html embed google map</a>      <style>.gmap_canvas {overflow:hidden;background:none!important;height:1213px;width:1005px;}  </style>  </div>"
      document.body.appendChild(newDiv);
      break;
    default:
      confirm('nothing heer')
      break;
  }
}



