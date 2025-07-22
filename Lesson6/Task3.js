function checkOrder(available, ordered) {
    if (ordered > available) {
        console.log("Your order is too large, we dont have enough goods")
    }
    if (ordered === 0) {
        console.log("Your order is empty")
    }
    if (available > ordered) {
        console.log("Your order is accepted")
    }
}

checkOrder(0, 0)
checkOrder(20, 19)
checkOrder(2, 20)
