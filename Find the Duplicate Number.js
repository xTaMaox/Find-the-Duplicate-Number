
/*
* Focus on the indexes, not the values
  1. Find the mid point
  2. For each mid point, count how many elements are before. By count I don't mean the sum.
  3. If count > mid then search left side because count should not exeeded mid
  4. Else left = mid +1;
*/

/*
    Example:
    
    
     L     M     R
     0  1  2  3  4
    [1, 3, 4, 2, 2]

    Midpoint is 2
    
    - Count the number of elements in the array less than or equal to 2
    - There are 3 elements less than or equal to 2. This means count is > midpoint of 2
    - Because count is 3 and the midpoint is 2, it shows there may be a duplicate on the left side between L and M pointer
    - This is because, if there was no duplicate, then count would equal the midpoint
    - Mid = right;

     L  M  R
     0  1  2  3  4
    [1, 3, 4, 2, 2]

    Midpoint is now 1
    
    - Count the number of elements in the array less than or equal to 1
    - There's only 1 element less than or equal to 1. Count is equal to the midpoint. 
    - This means there's no duplicates of 1
    - Mid = left+1;
    
           L
           M
           R
     0  1  2  3  4
    [1, 3, 4, 2, 2]
    
    - Count the number of elements in the array less than or equal to 2
    - There's 3 elements less than or equal to 2. 
    - Return left - answer is 2

*/


var findDuplicate = function(nums) {
    
    if(nums.length === 0 || nums === null) return 0;
    
    let left = 1;
    let right = nums.length -1;
    
    while(left < right){
        
        const mid = Math.floor(left + (right-left)/2);
        
        let count = 0;
        
        for(let i=0; i < nums.length; i++){
            if(nums[i] <= mid) count++
        }
        
        
        if(count > mid){
            right = mid;
        }else{
            left = mid +1;
        }
        
        count = 0;
    }
    
    return left
};
