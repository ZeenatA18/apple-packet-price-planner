function ApplePlanner() {

    let _boxCost = 0
    let _noApples = 0
    let _packetSize = 0
    let _profit = 0

    function setBoxPrice(boxPrice) {
        _boxCost = boxPrice
    }

    function getBoxPrice() {
        return _boxCost
    }

    function setNoApples(noApples) {
        _noApples = noApples
    }

    function getNoApples() {
        return _noApples
    }

    function setPacketSize(packetSize) {
        _packetSize = packetSize
    }

    function getPacketSize() {
        return _packetSize
    }

    function setProfit(profit) {
        _profit = profit
    }

    function getProfit() {
        return _profit
    }

    function packet_no(){
       return _noApples/_packetSize
    }

    function perApple(){
        return  _boxCost/_profit
    }

    return {
        setBoxPrice,
        getBoxPrice,
        setNoApples,
        getNoApples,
        setPacketSize,
        getPacketSize, 
        setProfit,
        getProfit,
        packet_no,
        perApple
    }
}