const exampleArr = [5, -2, 4, -10, -1, 14]
const positiveSum = (cats) => cats.filter((cat) => cat > 0).length
console.log(positiveSum(exampleArr))

const buggyCatNames = ["xFelixy", "xHuntery", "xSanyiy", "xPistay", "xCirmosy", "xCsipeszy", "xWhiskersy", "xFütyiy", "xSlukky", "xBélay", "xBundásy", "xKormiy", "xCirmiy"]
const removeChar = (names) => names.map(name => name.substring(1, name.length - 1))
console.log(removeChar(buggyCatNames))

const exampleCatAges = [27, 4, 8, 11, 2, 9, 39]
const youngestCat = (catAges) => catAges.sort((a, b) => a - b)[0]
console.log(youngestCat(exampleCatAges))

const exampleCatId = 123456
const createId = (catId) => String(catId).split("").reverse().map(numChar => Number(numChar))
console.log(createId(exampleCatId))

const foodListExample = [1,3,5,6,7,8]
const foodTime = (foodList) => Array.from({length: foodList[foodList.length - 1] - foodList[0] + 1})
    .map((element, index) => index + foodList[0])
console.log(foodTime(foodListExample))

