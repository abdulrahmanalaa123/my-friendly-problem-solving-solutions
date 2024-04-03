/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let index1 = 0;
   let counter = 1 ;
   for(let index2 = 1; index2< nums.length;index2++){
    const truth = nums[index1] === nums[index2]
    if(truth){
        counter++;
        if(counter ===3){
            index1=index2-1;
        }
    }else{
        let deleted = 0;
     if(counter >=3 ){
        nums.splice(index1,counter-2)        
        deleted = counter-2;

    }
        counter = 1;
        index2 = index2-deleted
        index1=index2;
        
    }
   

   }
    if(counter >2){
        nums.splice(index1,counter-2)      
    }
};


//creamy best solution ive found on leetcode

    // let c = 0
    // for (let i = 0; i < nums.length; i++) { 
    //     if (nums[i] !== nums[i + 2]) { 
    //         nums[c] = nums[i] 
    //         c++ 
    //     }
    // }
// return c
