// Our given ranges are: [2,5) && [7,10)

function doverlapCheck(r1_end, r2_start, r1_start, r2_end){

	if(r1_end < r2_start || r1_start > r2_end){
		return true;
	}
	else{
		return false;
	}
}

// Our new given ranges are: [4,9) && [4,15)

console.log(doverlapCheck(9,4,4,15));