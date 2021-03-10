module.exports = function reverse (n) {
    if (n < 0) {
        n * (-1)
    }
        let convert = n.toString()
        let splitNum = convert.split("")
        let reverseNum = splitNum.reverse()
        let newInt = reverseNum.join("")
        // let result = newInt.parseInt(joinNum)
        return newInt
}
