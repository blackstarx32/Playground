/**
 * V2D v0.1
 */

;var V2D = (function() {

	function Vector(x, y) {
		this.x = x || 0;
		this.y = y || 0;
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
		mul: function(v) {
			if(v instanceof Vector) {
				this.x *= v.x;
				this.y *= v.y;
			}
			else {
				this.x *= v;
				this.y *= v;				
			}
		}
		div: function(v) {
			if(v instanceof Vector) {
				this.x /= v.x;
				this.y /= v.y;
			}
			else {
				this.x /= v;
				this.y /= v;				
			}
		},
		mag: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},
		norm: function() {
			var mag = this.mag();
			this.div(mag);
		},
		dot: function(v) {
			return this.x * v.x + this.y * v.y;
		}
	};

/**
 * ==============================================
 * STATIC FUNCTION 
 * ==============================================
 */

 	Vector.add = function(v1, v2) {
 		return new Vector(v1.x + v2.x, v1.y + v2.y);
 	};

 	Vector.sub = function(v1, v2) {
 		return new Vector(v1.x - v2.x, v1.y - v2.y);
 	};

 	Vector.mul = function(v1, v2) {
 		if(v1 instanceof Vector && v2 instanceof Vector) 
 			return new Vector(v1.x * v2.x, v1.y * v2.y);
 		else if(v1 instanceof Vector)
 			return new Vector(v1.x * v2, v1.y * v2);
 		else if(v2 instanceof Vector) 
 			return new Vector(v2.x * v1, v2.y * v1);
 		else 
 			console.error("Vector.mul() needs vector to scalar or vice versa, or vector to vector");
 	};

 	Vector.div = function(v, s) {
 		if(v1 instanceof Vector && v2 instanceof Vector) 
 			return new Vector(v1.x / v2.x, v1.y / v2.y);
 		else if(v1 instanceof Vector)
 			return new Vector(v1.x / v2, v1.y / v2);
 		else if(v2 instanceof Vector) 
 			return new Vector(v2.x / v1, v2.y / v1);
 		else 
 			console.error("Vector.div() needs vector to scalar or vice versa, or vector to vector");
 	};

 	Vector.dot = function(v1, v2) {
 		return v1.x * v2.x + v1.y * v2.y;
 	};

 	return Vector;

})();