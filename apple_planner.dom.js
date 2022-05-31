const box_Price = document.querySelector(".box_price");
const no_Apples = document.querySelector(".No_apples");
const packet_Size = document.querySelector(".packet_size")
const profit_ = document.querySelector(".profit")
const btn_ = document.querySelector("._btn")

const applePlanner = ApplePlanner();

btn_.addEventListener("click", function(){
    // alert("Add")
applePlanner.setBoxPrice(Number(box_Price.value));
applePlanner.setNoApples(Number(no_Apples.value));
applePlanner.setPacketSize(Number(packet_Size.value));
applePlanner.setProfit(Number(profit_.value));

})