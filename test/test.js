const emoji = require('./../src/index');

console.log(emoji.grin());
console.log(emoji.grin(true));
console.log(emoji.grin(false, true));
console.log(emoji.grin(false, false, true));
console.log(emoji.grin(false, false, false, true));
console.log(emoji.grin(false, false, false, false, true));
console.log("This next emoji is known to not show up");
console.log(emoji.rofl()); // does not show up!
console.log(emoji.tears_of_joy());
console.log("This next emoji is known to not show up");
console.log(emoji.smile()); // does not show up!