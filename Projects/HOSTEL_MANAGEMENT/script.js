// const navToggle = document.querySelector(".nav-toggle");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", function () {
//   // console.log(links.classList);
//   // console.log(links.classList.contains("random"));
//   // console.log(links.classList.contains("links"));
//   if (links.style.display("none")) {
//     links.style.remove.display("none");
//   } else {
//     links.style.add.display("none");
//   }
// //   links.classList.toggle("show-links");
// });
var c=0
document.getElementById("nav-toggle").addEventListener("click", display);

function display() {
 
  if(c%2==0)
  document.getElementById("links").style.display ="unset";

  else
  document.getElementById("links").style.display ="none";

  c++
    }

  

const containerE1 = document.querySelector(".text");

let charindex = 0;

const xyz=" HOSTEL MANAGEMENT SYSTEM";

updatetext();

function updatetext()
{
  charindex++;

containerE1.innerText=  xyz.slice(0,charindex)
console.log(containerE1);


if(charindex === xyz.length)
{
  charindex =0;
}



setTimeout(updatetext , 100);
}


// updateText();

// function update()
// {
//   containerE1.innerHTML = `i am a dev`
// }
  // if(document.getElementById("links").style.display ="unset")
  // {
  //   document.getElementById("links").style.display ="none";
  // }
  // else{
  //   document.getElementById("links").style.remove.display ="unset";
  // }



