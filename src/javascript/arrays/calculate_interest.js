const interest_table = [4.95, 8.38, 13.03, 16.58, 21.53, 24.97];

let interest_increments = [];

interest_increments = interest_table.map((amount, index) => {
	if (index > 0 ){
		console.log(`${interest_table[index]} - ${interest_table[index-1]}`);
		return (interest_table[index] - interest_table[index-1]).toPrecision(3);
	}
});
interest_increments.shift();
const months = ['March', 'April', 'May', 'June', 'July'];

console.log(This is how much more your interest has increased each month);
interest_increments.forEach((increment, index) => {
	console.log(`${months[index]}: ${increment}`);	
});
