const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");




const tempature = 12;


if (tempature < 0) {
	console.log("Make sure you pick out a scarf!");
} else if (tempature < 15) {
	console.log("Short sleeves won't cut it!");
} else {
	console.log("Short sleeves are fine.");
}

console.log("Now you are ready to go outside!");




const isCitizen = true;

const age = 26;

if (isCitizen && age > 18) {
	console.log("You are eligible to vote.");
}



if (tempature < -40 || tempature > 40) {
	console.log("Maybe going outside isn't a great idea...");
}


if (!raining) {
	console.log("Leave your umbrella at home!");
}
