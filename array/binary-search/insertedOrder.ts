var search = function (nums: number[], target: number) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) start = mid + 1;
  }
  return start;
};

console.log(search([0, 1, 2, 3, 4, 6, 100, 10000], -1));
