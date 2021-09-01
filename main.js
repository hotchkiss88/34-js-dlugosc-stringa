let first = "Uwielbiam JavaScript";

let second = "Jestem świetnym programistą";

function myF(x, y) {
    let one = x.length;
    let two = y.length;
    if (one > two) {
        return x;
    } else {
        return y;
    }
}

console.log(myF(first, second));