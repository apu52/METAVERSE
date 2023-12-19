var ctx,myPieChart;

// hideTimeOut=setTimeout(()=>{
//   popper.innerText='modal'
//   popperform.innerText='close'
//   jQuery('#inputModal').modal('hide');
//   messagebox.style.display='none'
//   jQuery('#exampleModalCenter').trigger('hide')
// },5000)

function calculate(){
    let landsize=document.getElementById('landsize').value
    let nitrogenLevel=document.getElementById('nitrogenLevel').value
    let phosphorusLevel=document.getElementById('phosphorusLevel').value
    let potassiumLevel=document.getElementById('potassiumLevel').value
    let nitrogenContent=document.getElementById('nitrogenContent').value
    let phosphorusContent=document.getElementById('phosphorusContent').value
    let potassiumContent=document.getElementById('potassiumContent').value
    let soiltype=document.getElementById('soiltype').value
    let croptype=document.getElementById('croptype').value
    const table=document.getElementById('mytable')
    const tableCss=document.getElementById('mytable')
    let parent=document.getElementById('subData');
    let children=parent.querySelectorAll('h2');
    let backdrop=document.getElementsByClassName("modal-backdrop fade show")[0];
    
    if(soiltype!='default' && croptype!='default' && !(landsize<=0) && !(nitrogenLevel<=0) && !(potassiumLevel<=0) && !(phosphorusLevel<=0) && !(nitrogenContent<=0) && !(potassiumContent<=0) && !(phosphorusContent<=0)){
      let calciData={
        "soiltype":soiltype,
        "croptype":croptype,
        "landsize":landsize,
        "nitrogenLevel":nitrogenLevel,
        "potassiumLevel":potassiumLevel,
        "phosphorusLevel":phosphorusLevel,
        "nitrogenContent":nitrogenContent,
        "potassiumContent":potassiumContent,
        "phosphorusContent":phosphorusContent
      }
      var xhr = new XMLHttpRequest;
      xhr.open('GET', '/calculate/' + JSON.stringify(calciData), true);
      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
          var returnData = xhr.responseText;
          let data=JSON.parse(returnData)
          console.log(data)
          // table.style.display='block'
      jQuery('#exampleModalCenter').modal('hide');
      jQuery('#inputModal').modal('hide');
      backdrop.style.display="none";

          table.rows[1].cells[1].innerHTML=`Total fertilizer required for ${landsize} acres`
          table.rows[1].cells[2].innerHTML=`${data['totalFertilizer']}kg`

          table.rows[2].cells[1].innerHTML=`Amount of Nitrogen(N) required for ${landsize} acres`
          table.rows[2].cells[2].innerHTML=`${data['totalRequiredN']}kg/acre`

          table.rows[3].cells[1].innerHTML=`Total Phosphorus(P) for ${landsize} acres`
          table.rows[3].cells[2].innerHTML=`${data['totalRequiredP']}kg/acre`

          table.rows[4].cells[1].innerHTML=`Total Potassium(K) for ${landsize} acres`
          table.rows[4].cells[2].innerHTML=`${data['totalRequiredK']}kg/acre`

          table.rows[5].cells[1].innerHTML=`Amount of fertilizer per acre`
          table.rows[5].cells[2].innerHTML=`${data['fertilizarePerAcre']}kg/acre`
          tableCss.style.width='70%'
          setPie(data['totalRequiredN'],data['totalRequiredP'],data['totalRequiredK']);
          
          children[0].innerHTML="Soil Type : "+soiltype       
          children[1].innerHTML="Crop Type Type : "+croptype
          children[2].innerHTML="Land Size : "+landsize
          children[3].innerHTML="Nitrogen level : "+nitrogenLevel
          children[4].innerHTML="Phosphorus level : "+phosphorusLevel
          children[5].innerHTML="Potassium level : "+potassiumLevel
          children[6].innerHTML="Nitrogen Content : "+nitrogenContent
          children[7].innerHTML="Phosphorus Content : "+phosphorusContent
          children[8].innerHTML="Potassium Content : "+potassiumContent
        }
      };
      xhr.send();
    }
    else if(soiltype=='default'){
      alert('soil type is invalid!!!')
    }
    else if(croptype=='default'){
      alert('crop type is invalid!!!')
    }else if( landsize<=0 || nitrogenLevel<=0 || potassiumLevel<=0 || phosphorusLevel<=0 || nitrogenContent<=0 || potassiumContent<=0 || phosphorusContent<=0){
      alert("Cannot accept zero or negative values!")
    }
    
    // hideTimeOut=setTimeout(()=>{
    //   popper.innerText='modal'
    //   popperform.innerText='close'
    //   jQuery('#inputModal').modal('hide');
    //   messagebox.style.display='none'
    //   jQuery('#exampleModalCenter').trigger('hide')
    // },5000)
  }
var hideTimeOut;
function tooltip(instance){
  let messagebox=document.getElementById('messagebox')
  let tip=document.getElementById('tip')
  let tipinfo=document.getElementById('tip-info')

  value=instance.getAttribute('name')
  clearTimeout(hideTimeOut)



  jQuery('#inputModal').modal('show');
  messagebox.style.display='block'
  switch(value){
    case 'soiltype':
      tip.innerText="Soil Type"
      tipinfo.innerText="Here you should select the soil type on which you are farming, or on which you willl use fertilizers."
      break;
    case 'croptype':
      tip.innerText="Crop Type"
      tipinfo.innerText="Here you can select the the crop type you are farming, or a crop for which you need fertilizer."
      break;
    case 'landsize':
      tip.innerText="Land Size"
      tipinfo.innerText="In this field you have to enter the size of your farm land where you will be farming, or you'll need fertilizers. Please enter positive numbers, and use unit ac(acres) in this field."
      break;
    case 'nitrogenLevel':
      tip.innerText="Nitrogen level in land"
      tipinfo.innerText="Here you have to specify the current nitrogen level present in your farm. You can get this information by nearby 'Soil Test Centers', or you can get them/their contacts by our website. The unit should be in N kg/acre. Following field is important for fertilizer calculator."
      break;
    case 'phosphorusLevel':
      tip.innerText="Phosphorus level in land"
      tipinfo.innerText="Here you have to specify the current phosphorus level present in your farm. You can get this information by nearby 'Soil Test Centers', or you can get them/their contacts by our website. The unit should be in P kg/acre. Following field is important for fertilizer calculator."
      break;
    case 'potassiumLevel':
      tip.innerText="Potassium level in land"
      tipinfo.innerText="Here you have to specify the current potassium level present in your farm. You can get this information by nearby 'Soil Test Centers', or you can get them/their contacts by our website. The unit should be in K kg/acre. Following field is important for fertilizer calculator."
      break;
    case 'nitrogenContent':
      tip.innerText="Nitrogen ratio from fertilizer"
      tipinfo.innerText="In this field you should enter the ratio of Nitrogen from the fertilizer you will use for far. This information will get on the packet of any fertilizer you'll buy. It is written in bold lable like NPK(10-12-12). Remember, ratio is required here, not percentage of nitrogen among NPK."
      break;
    case 'phosphorusContent':
      tip.innerText="Phosphorus ratio from fertilizer"
      tipinfo.innerText="In this field you should enter the ratio of Phosphorus from the fertilizer you will use for far. This information will get on the packet of any fertilizer. It is written in bold lable like NPK(10-16-10). Remember, ratio is required here, not percentage of Phosphorus among NPK."
      break;
    case 'potassiumContent':
      tip.innerText="Potassium ratio from fertilizer"
      tipinfo.innerText="In this field you should enter the ratio of Potassium from the fertilizer you will use for far. This information will get on the packet of any fertilizer you'll bye. It is written in bold lable like NPK(16-10-12). Remember, ratio is required here, not percentage of Potassium among NPK."
      break;

  }
  hideTimeOut=setTimeout(()=>{
      tip.innerText='Tip'
      tipinfo.innerText='Tip-info'
      jQuery('#inputModal').modal('hide');
      messagebox.style.display='none'
      jQuery('#exampleModalCenter').trigger('focus')
  },5000)
  
}



//logic of pie chart

window.onload = function() {
  var canvas = document.getElementById('myPieChart');
  if (canvas) {
    ctx = canvas.getContext('2d');
    var pieChartData = {
      labels: ['Empty'],
      datasets: [{
        data: [100],
        backgroundColor: [
          'rgba(164, 164, 164,0.8)'
        ]
      }]
    };
    var pieChartOptions = {
      responsive: true
    };
    myPieChart = new Chart(ctx, {
      type: 'pie',
      data: pieChartData,
      options: pieChartOptions
    });
  }
};

function setPie(n,p,k){
  const h3=document.getElementById('h3');
  nValue=(n/(n+p+k))*100
  pValue=(p/(n+p+k))*100
  kValue=(k/(n+p+k))*100

  var newData = [nValue, pValue, kValue];
  var newColors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
  ];
  var newLabels = ['Nitrogen ratio','Phosphorus ratio','Potassium ratio'];
  var newDataObject = {
    labels: newLabels,
    datasets: [{
      data: newData,
      backgroundColor: newColors
    }]
  };
  myPieChart.data = newDataObject;
  myPieChart.update();
  h3.innerHTML="<ul> <li>Nitrogen percentage : "+Math.round(nValue)+" </li> <li>Phosphorus percentage : "+Math.round(pValue)+"</li> <li>Potassium percentage : "+Math.round(kValue)+"</li></ul>"
}