function ordenar(array) {
	return [...array].sort((a, b) => a - b);
}

const nums = [3, 1, 7, 9, 4, 6];
const numsOrdenados = ordenar(nums);

console.log({ nums });
console.log({ numsOrdenados });

const parteNums = nums.slice(1);

console.log({ parteNums, nums });
