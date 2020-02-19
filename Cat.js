function Cat() {
	this.stomatch = [];
}
cat.prototype.eat = function(mouse) {
	this.stomatch.push(mouse);
};
cat.prototype.say = function(){
	console.log('Meow meow');
}