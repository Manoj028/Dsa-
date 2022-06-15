/*let savings = 57000;

switch(true){
    case savings >= 20000 && savings <= 30000  :
        console.log("Buy vivo phone");
        break;
    case savings >= 50000:
        console.log("Buy Samsung phone");
        break;

    case savings <= 10000:
        console.log("Buy redmi phone");
        break;

    default:
        console.log("You dont have enough savings")


}*/

/*function sumzero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum===0){
            return [arr[left],arr[right]];
        }
        else if(sum>0) {
            right--;
        }
        else{
            left++;
        }
    }
}
console.log(sumzero([-3,-1,0,1,2,3]));*/
/*

/*function sumzero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left]+arr[right];
        if(sum===0){
            return [arr[left],arr[right]];
        }
        else if(sum>0){
            right--;
        }
        else{
            left++;
        }
    }
}
console.log(sumzero([-5,4,6,7,5,8,8,]));*/


//count unique values/

/*function UniqueValues(arr){
    let count = 0;
    let left = 0;
    let right = left + 1;
    while(left<right){
        if(arr[left]!==arr[right]){
            count+=1;
            left++;
            right++;
        }
     
    }

    }
console.log(UniqueValues([1,2,3,4]));*/

//count down 

/*function countdown(num){
    if(num<=0){
        console.log('All done');
        return;
    }
    console.log(num);
    num--
    countdown(num);
}
countdown(5)*/

//sum of n natural numbers using recursion;
/*function SumRange(num){
    if(num===1) return 1;
    return num + SumRange(num-1);
}
SumRange(4)*/




    //Reverse an Array
    const arr = [1,2,3,4,5,6,7]
    let Reversed  = [];
    for(let i=arr.length-1;i>=0;i--){
        Reversed.push(arr[i]);
    }
    console.log(Reversed);
