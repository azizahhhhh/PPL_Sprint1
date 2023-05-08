// console.log(variable);

let variable = 2;

if (variable == 1) {
    console.log("variable = 1");
}else if(variable == 2){
    console.log("variable = 2");
}else{
    console.log("variable tidak sama dengan 1")
}

// DOM
function hitung(){
    var hasil;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var op = document.getElementById("op").value;
    if(op == "+"){
        hasil = Number(n1) + Number(n2);
    } else if(op == "-"){
        hasil = Number(n1) - Number(n2)
    } else if(op == "*"){
        hasil = Number(n1) * Number(n2)
    } else if(op == "/"){
        hasil = Number(n1) / Number(n2)
    } else{
        hasil = "operator salah"
    }
    document.getElementById("hasil").innerHTML = hasil;
}

// function gantiText(){
//     document.getElementsByTagName("h1")[1].innerHTML = "Halo Azizah";
//     // console.log(document.getElementById("h1")[0].innerHTML);
//     // document.getElementsByTagName("h1")[0].style.color = "blue";
//     document.getElementsByTagName("h1")[1].style={
//         fontSize : "20px",
//         color: "red"
//     }

//     // document.getElementById("");
//     // document.getElementsByClassName("")[0];
// }