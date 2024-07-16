function sendMail(e){
    e.preventDefault();
    var params={
        email_id:document.getElementById("membership-email").value,
        from_name:"Netflix",
        from_mail:"arpanchowdhury003@gmail.com"
    }
    emailjs.send("service_7lb51ka","template_njg2wcp",params).then(function(res){
        alert("Subscribed to membership plan!")
    })
}