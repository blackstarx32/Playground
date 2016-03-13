/**
 * V2D v0.1
 */

;var V2D = (function() {

	function Vector(x, y) {
		this.x = x;
		this.y = y;
	}

	Vector.prototype = {
		constructor: Vector,
		add: function(v) {
			this.x += v.x;
			this.y += v.y;
		},
		sub: function(v) {
			this.x -= v.x;
			this.y -= v.y;
		},
		mul: function(s) {
			this.x *= s;
			this.y *= s;
		}
		div: function(s) {
			this.x /= s;
			this.y /= s;
		}
	}

/**
 * ==============================================
 * STATIC FUNCTION 
 * ==============================================
 */

 	Vector.add = function(v1, v2) {
 		return new Vector(v1.x + v2.x, v1.y + v2.y);
 	}

 	Vector.sub = function(v1, v2) {
 		return new Vector(v1.x - v2.x, v1.y - v2.y);
 	}

 	Vector.mul = function(v, s) {
 		return  new Vector(v.x * s, v.y * s);
 	}

 	Vector.div = function(v, s) {
 		return new Vector(v.x / s, v.y / s);
 	}

 	return Vector;

})();