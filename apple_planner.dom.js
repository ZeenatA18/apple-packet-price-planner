const box_Price = document.querySelector(".box_price");
const no_Apples = document.querySelector(".No_apples");
const packet_Size = document.querySelector(".packet_size")
const profit_ = document.querySelector(".profit")
const btn_ = document.querySelector("._btn")

const noPackets = document.querySelector(".message3");
const appleCost = document.querySelector(".message2");
const packetCost = document.querySelector(".message1");
const price = document.querySelector(".message");

const applePlanner = ApplePlanner();

btn_.addEventListener("click", function(){
    // alert("Add")
applePlanner.setBoxPrice(Number(box_Price.value));
applePlanner.setNoApples(Number(no_Apples.value));
applePlanner.setPacketSize(Number(packet_Size.value));
applePlanner.setProfit(Number(profit_.value));



// (appleCost.innerHTML*2) = setBoxPrice() / setNoApples()

// appleCost.innerHTML = applePlanner.setBoxPrice(Number(box_Price.value)) / applePlanner.setNoApples(Number(no_Apples.value));

appleCost.innerHTML = applePlanner.setBoxPrice(Number(box_Price.value)) / applePlanner.setProfit(Number(profit_.value));

console.log(appleCost.innerHTML)

 packetCost.innerHTML = appleCost.innerHTML*5

 let profit__ =  profit_ /100

noPackets.innerHTML = applePlanner.setBoxPrice(Number(box_Price.value)) / profit__


})