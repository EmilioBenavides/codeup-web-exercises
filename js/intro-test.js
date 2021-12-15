function count(input) {
    if (typeof input !== "string") {
        return false
    } else {
        return input.length
    }

}
console.log(count("emilio") === 5)
console.log(count("emilio") === 6)
console.log(count(5) === false)
console.log(count(null) === false)
console.log(count(true) === false)
