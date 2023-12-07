export function parse(input: string) {
  return input
}

export function partOne(input: ReturnType<typeof parse>) {
  const data = input.split('\n')
  let result = ""
  let sum = 0
  data.forEach((item, index) => {
    let lastDigit = 0
    let firstDigit = 0
    for (let i = 0; i< item.length; i++) {
      let character = item.charAt(i)
      if (Number.isInteger(Number.parseInt(character))) {
        firstDigit = Number.parseInt(character)
        break
      }
    }
    for (let i = item.length - 1; i >= 0; i--) {
      let character = item.charAt(i)
      if (Number.isInteger(Number.parseInt(character))) {
        lastDigit = Number.parseInt(character)
        break
      }
    }
    result = firstDigit.toString() + lastDigit.toString()
    console.log(result)
    sum += Number.parseInt(result)
  })

  return sum
}

export function partTwo(input: ReturnType<typeof parse>) {
  const data = input.split('\n')
  let result = ""
  let sum = 0
  let map = new Map()
  map.set("one", 1)
  map.set("two", 2)
  map.set("three", 3)
  map.set("four", 4)
  map.set("five", 5)
  map.set("six", 6)
  map.set("seven", 7)
  map.set("eight", 8)
  map.set("nine", 9)
  data.forEach((item, index) => {
    console.log(item)
    let new_item = ""
    // string build all digits and digitwords into one string
    let sub_indexes: { [key: string]: number } = {}
    map.forEach((value, key) => {
      if (item.includes(key)) {
        sub_indexes[key] = item.indexOf(key)
      }
    })
    for (let i = 0; i < item.length; i++) {
      let character = item.charAt(i)
      if (Number.isInteger(Number.parseInt(character))) {
        sub_indexes[character] = i
      }
    }

    var sortableArray = Object.entries(sub_indexes);
    var sortedArray = sortableArray.sort(([, a], [, b]) => a - b);

    console.log(sortedArray)

    

    console.log("new item" + new_item)
    console.log(new_item)
    console.log(item)
    let lastDigit = 0
    let firstDigit = 0
    for (let i = 0; i< item.length; i++) {
      let character = item.charAt(i)
      if (Number.isInteger(Number.parseInt(character))) {
        firstDigit = Number.parseInt(character)
        break
      }
    }
    for (let i = item.length - 1; i >= 0; i--) {
      let character = item.charAt(i)
      if (Number.isInteger(Number.parseInt(character))) {
        lastDigit = Number.parseInt(character)
        break
      }
    }
    result = firstDigit.toString() + lastDigit.toString()
    console.log(result)
    sum += Number.parseInt(result)

  })
  console.log(sum)
  return sum
}