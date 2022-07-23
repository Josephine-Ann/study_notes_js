const nums = [1,2,3,4,5,6]

// these do the same:

for (let num in nums) {
    console.log(nums[num])
}

for (let num of nums) {
    console.log(num)
}

const forEachNums = nums.forEach(element => {
    return element + 2
});

const mapNums = nums.map(element => {
    return `This was mapped over: ${element}`
});

console.log(forEachNums)
console.log(mapNums)
