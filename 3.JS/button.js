function increment(){
    //  console.log("증가버튼 클릭");
    var result = document.getElementById("result")
    console.log(result);
    result.innerText = Number(result.innerText)+1;
}
function decrement(){
    // console.log("감소버튼 클릭");
    var result = document.getElementById("result")
    console.log(result);
    result.innerText = Number(result.innerText)-1;
}