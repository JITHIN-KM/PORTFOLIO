function sendMail(){
  var data={
    name: document.getElementById("cname").value,
    email: document.getElementById("cemail").value,
    message: document.getElementById("cmessage").value
  };
const serviceID ="service_2h10bxo";
const templateID ="template_02sjfsl";

emailjs.send(serviceID,templateID,data)
.then(
  res =>{
    document.getElementById("cname").value="";
    document.getElementById("cemail").value="";
    document.getElementById("cmessage").value="";
    console.log(res);
    alert("E-mail Send Successfully");
  }
)
.catch((err) => console.log(err));
}