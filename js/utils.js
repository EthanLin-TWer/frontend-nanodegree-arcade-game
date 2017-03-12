var utils = (function () {
	var declareInheritance = function(subClass, superClass) {
		var indirectionFunction = function () { };
		indirectionFunction.prototype = superClass.prototype;

		subClass.prototype = new indirectionFunction();
		subClass.prototype.constructor = subClass;
	};
	
	return {
		inherits: declareInheritance	
	}
})();