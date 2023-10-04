
function calcTotal() {
    const precio=1000
    console.log("ingreso a calcTotal")

    let cant=document.getElementById("cant").value
    console.log(cant)
    let cant2=document.getElementById("cant2").value
    console.log(cant2) 
    let cant3=document.getElementById("cant3").value
    console.log(cant3)

    let total=cant*precio
    let total2=cant2*precio
    let total3=cant3*precio

    console.log(total)
    console.log(total2) 
    console.log(total3)

    document.getElementById("total").innerHTML=total
    document.getElementById("total2").innerHTML=total2
    document.getElementById("total3").innerHTML=total3
}
