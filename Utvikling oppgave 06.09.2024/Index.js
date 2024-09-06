//1a
let i = 0;
while (i<10) {
    console.log(i);
    i = i + 1
}

//1b
for (let i = 0; i < 10; i++) {

} //???

function listofnr(typeTall) {
    let oddetall = true
    for (let i = 1; i <= 100; i++) {
        if (typeTall == "oddetall" && oddetall) {
            console.log("gawk gawk  " + i)
            oddetall = false
            continue
        }
        else if (typeTall == "oddetall"){
            oddetall = true
            continue
        }

        if (typeTall == "partall" && !oddetall) {
            console.log("gawk gawk  " + i)
            oddetall = true
            continue
        }
        else if (typeTall == "partall") {
            oddetall = false
            continue
        }
    }
}
