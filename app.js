let data = [];
let getValue = document.querySelector(".header input");
let addBtn = document.querySelector(".header button");
let binddata = document.getElementById("bind");
addBtn.onclick = ()=>{  
    if(getValue.value != ""){
    data.push(getValue.value)
    let list= "";
    data.forEach((e , i)=>{
        list +=`<div class="flex todo-item">
                    <p>${e}</p>
                    <span onclick="dotodet(${i})">Del</span>
                </div>`
    })
    binddata.innerHTML = list;
    getValue.value = ""
    document.getElementById("em-val").innerHTML = "";
    }else{
        document.getElementById("em-val").innerHTML = "Enter The Value";
    }
}
function dotodet(i){
    data.splice(i , 1);
    let list= "";
    data.forEach((e , i)=>{
        list +=`<div class="flex todo-item">
        <p>${e}</p>
        <span onclick="dotodet(${i})">Del</span>
        </div>`
    })
    binddata.innerHTML = list;
    document.getElementById("em-val").innerHTML = "";
}