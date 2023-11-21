var twoSum = function(nums, target) {
    var array1 = [0, 0];
    var number = 0;
    
  for(  i of nums){
        var array2 = nums
      if(i <= target){
        number = target - i;
        array1[0] = nums.indexOf(i);

        console.log(i + '    i')
        for( y of array2){
            if(y == number  && nums.indexOf(i) != nums.indexOf(y)){
                console.log(y + 'y' + number)
                array1[1] = nums.indexOf(y);
                return array1;
            }
        }
      }
  } 

  return array1;

};


console.log(twoSum([3,3],6));