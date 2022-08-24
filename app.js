

var roomStandart = 100;
var roomJuniorSuite = 120;
var roomSuite = 150;
var spa = 20;
var parking = 10;
var individual = 0.75;
var doble = 1;
var triple = 0.25;

var nights = () => parseInt(document.getElementById("nights").value); //cantidad de noches
var room = () => document.getElementById("room").value; //habitacion standart, junior suite o suite
var typeroom = () => document.getElementById("typeroom").value // habbitacion doble, individual o triple
var parkingNights = () => parseInt(document.getElementById("parking").value) // numero de noches de parking



function priceNights() {
   
    if(room() == "standart") {
        return roomStandart * nights();
    }else if(room() == "juniorsuite") {
       
        return roomJuniorSuite * nights();
    }else {
      
        return roomSuite * nights();
    }
};




var spaYesOrNo = () => document.getElementById("spa").checked ? nights() * spa : 0;
    
function discountOrNot(precio){
    if(typeroom() == "individual") {
       return precio * individual; 

    }else if( typeroom() == "triple") {
      
        return (precio * triple) + precio;
    }else {
      
        return precio * 1;
    }
}




var parkingYesOrNo = () => parkingNights() > 0? (parkingNights() * parking) : 0;
 
function totalReserved(){
    var precioNoche = priceNights();
    var precioSpa = spaYesOrNo();
    var precioConSpa = precioNoche + precioSpa;
    var precioConDescuento = discountOrNot(precioConSpa);
    var precioParking = parkingYesOrNo();
    return precioConDescuento + precioParking;
};

var handleBottonClick = () => console.log(totalReserved());
document.getElementById("total").addEventListener("click", handleBottonClick);




