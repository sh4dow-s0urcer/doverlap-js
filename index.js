// Our given ranges are: [2,5) && [7,10)

function validateParams(names, vals) {
    var missing = [];
    for (var i=0; i < names.length; i++) {
        if (vals[i] === undefined) missing.push(names[i]);
    }
    if (missing.length > 0) throw "Missing arguments: " + missing.join(', ');
}

function doverlapCheck(r1_start, r1_end, r2_start, r2_end){

	validateParams(['r1_start', 'r1_end', 'r2_start', 'r2_end'], [r1_start, r1_end, r2_start, r2_end]);
	if (r1_end < r2_start || r1_start > r2_end){
		return true;
	}
	else{
		return false;
	}

}

// Our new given ranges are: [4,9) && [4,15)

console.log(doverlapCheck(2,7,7,8));

module.exports = doverlapCheck