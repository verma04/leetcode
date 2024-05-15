// function binarySearch(nums, target) {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     }

//     if (target < nums[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }

// const arr = [0, 1, 2, 3, 4, 6, 100, 10000];

// console.log(binarySearch(arr, 100)); // 6

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
  return -1;
};

const arr = [0, 1, 2, 3, 4, 6, 100, 10000];

console.log(search(arr, 10000));
