function calculateTicket(){
let name=document.getElementById("customername").value
let age=eval(document.getElementById("customerage").value)
let price
if (age == "") {
    alert("please enter your age")
}
else if (age < 12) {
    price = 5
}
else if (age <= 17) {
    price = 7
}
else {
    price = 10
}
let num=eval(document.getElementById("numberoftickets").value)
let total=eval(price*num)
document.getElementById("result").innerHTML=
"<h2>" + name + "'s Ticket</h2>"+
"Price per ticket :" +price+ " $" +"<br>"
"Number of tickets :"+ num+ "<br>"
"Total : "+ total +" $"
}