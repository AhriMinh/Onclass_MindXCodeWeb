console.log("hello")

let oldIndex = 1000;
let newIndex = 1340;

let tienDien = 0;

let total = newIndex - oldIndex;

if (total >= 251) {
    tienDien = tienDien + (total - 251) * 2297 + 50 * 1243 + 50 * 1304 + 50 * 1644 + 50 * 1806 + 50 * 1976

}
else if (total >= 201) {
    tienDien = tienDien + (total - 201) * 1976 + 50 * 1243 + 50 * 1304 + 50 * 1644 + 50 * 1806
}

else if (total >= 151) {
    tienDien = tienDien + (total - 151) * 1806 +  50 * 1243 + 50 * 1304 + 50 * 1644
}

else if (total >= 101) {
    tienDien = tienDien + (total - 101) * 1644 + 50 * 1243 + 50 * 1304
}

else if (total >= 51) {
    tienDien = tienDien + (total - 51) * 1304 + 50 * 1243 
}

else if (total >= 0) {
    tienDien = tienDien + (total - 0) * 1243
}

console.log(tienDien)

//tính tổng bình phương của các số nguyên dương bé hơn 50 

let sum = 0
for (let i = 1; i<=50; i++) {
    if (i % 2 === 0) {
        sum += i**2
    }
    
}
console.log(sum)