const busTicket = 800;
const age = 30;
const students = true;
if(age < 10){
    // const discount = busTicket - busTicket ;
    // const payAmount = discount;
    console.log('your free')
}
else if(students){
    const discount = busTicket / 2;
    const payAmount = discount;
    console.log(discount)
}
else if(age >= 60){
  const discount = busTicket * 15 / 100;
  const payAmount = busTicket - discount;
  console.log(payAmount)
}
else{
    console.log(busTicket)
}