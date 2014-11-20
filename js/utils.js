var utils = {
	inherits: function (Parent, Child) {
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
	},

	getObjectIndex: function (array, element, nameOfAttr) {
	  var elements = array.map(function(x) {return x[nameOfAttr]; });
	  return elements.indexOf(element);
	},

	getObjectCount: function (array, value, nameOfAttr) {
	  var count = 0, elements = array.map(function(x) {return x[nameOfAttr]; });
	  for (i = 0; i < elements.length; i++) {
	    if (elements[i] === value) count++;
	  }
	  return count;
	}
};