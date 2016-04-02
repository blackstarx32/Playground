/**
 * V2D v0.2
 */

var Vector2 = (function() {

	function Vector2(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}

	Vector2.prototype = {
		constructor: Vector2,
		magnitude: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},
		sqrMagnitude: function() {
			return this.x * this.x + this.y * this.y;
		},
		normalize: function() {
			var magnitude = this.magnitude();
			this.x /= magnitude;
			this.y /= magnitude;
		},
		add: function(other) {
			this.x += other.x;
			this.y += other.y;
		},
		sub: function(other) {
			this.x -= other.x;
			this.y -= other.y;
		},
		div: function(number) {
			this.x /= number;
			this.y /= number;
		},
		mul: function(number) {
			this.x *= number;
			this.y *= number;
		},
		equalTo: function(other) {
			return this.x === other.x && this.y === other.y;
		},
		notEqualTo: function(other) {
			return this.x !== other.x && this.y !== other.y;
		},
		negate: function() {
			this.x = -this.x;
			this.y = -this.y;
		}
	};

	/**
	 * =================================
	 * VECTOR2 CONSTANTS
	 * =================================
	 */
	Vector2.LEFT = new Vector2(-1, 0);
	Vector2.RIGHT = new Vector2(1, 0);	

	Vector2.UP = new Vector2(0, -1);
	Vector2.DOWN = new Vector2(0, 1);

	Vector2.ZERO = new Vector2(0, 0);
	Vector2.ONE = new Vector2(1, 1);


	/**
	 * =================================
	 * RETURN 
	 * =================================
	 */
	return Vector2;

})();




// ;var Vector2 = (function() {

// 	function Vector(x, y) {
// 		this.x = x || 0;
// 		this.y = y || 0;
// 	}

// 	Vector.prototype = {
// 		constructor: Vector,
// 		init: function(x, y) {
// 			this.x = x;
// 			this.y = y;
// 		},
// 		clone: function() {
// 			return new Vector(this.x, this.y);
// 		},
// 		negative: function() {
// 			this.x = -this.x;
// 			this.y = -this.y;
// 		},
// 		equals: function(v) {
// 			return this.x == v.x && this.y == v.y;
// 		},
// 		add: function(v) {
// 			this.x += v.x;
// 			this.y += v.y;
// 		},
// 		sub: function(v) {
// 			this.x -= v.x;
// 			this.y -= v.y;
// 		},
// 		mul: function(v) {
// 			if(v instanceof Vector) {
// 				this.x *= v.x;
// 				this.y *= v.y;
// 			}
// 			else {
// 				this.x *= v;
// 				this.y *= v;				
// 			}
// 		}
// 		div: function(v) {
// 			if(v instanceof Vector) {
// 				this.x /= v.x;
// 				this.y /= v.y;
// 			}
// 			else {
// 				this.x /= v;
// 				this.y /= v;				
// 			}
// 		},
// 		sqrdMag: function() {
// 			return this.x * this.x + this.y * this.y;
// 		},
// 		mag: function() {
// 			return Math.sqrt(this.x * this.x + this.y * this.y);
// 		},
// 		norm: function() {
// 			var mag = this.mag();
// 			this.div(mag);
// 		},
// 		dot: function(v) {
// 			return this.x * v.x + this.y * v.y;
// 		},
// 		angle: function() {
// 			return Math.atan2(this.y, this.x);
// 		},
// 		angleDeg: function() {
// 			return (Math.atan2(this.y, this.x) * 180 / Math.PI + 360) % 360;
// 		}
// 	};

// *
//  * ==============================================
//  * STATIC FUNCTION 
//  * ==============================================
 
//  	Vector.equal = function(v1, v2) {
//  		return v1.x == v2.x && v1.y == v2.y;
//  	};

//  	Vector.clone = function(v) {
//  		return new Vector(v.x, v.y);
//  	};

//  	Vector.add = function(v1, v2) {
//  		return new Vector(v1.x + v2.x, v1.y + v2.y);
//  	};

//  	Vector.sub = function(v1, v2) {
//  		return new Vector(v1.x - v2.x, v1.y - v2.y);
//  	};

//  	Vector.mul = function(v1, v2) {
//  		if(v1 instanceof Vector && v2 instanceof Vector) 
//  			return new Vector(v1.x * v2.x, v1.y * v2.y);
//  		else if(v1 instanceof Vector)
//  			return new Vector(v1.x * v2, v1.y * v2);
//  		else if(v2 instanceof Vector) 
//  			return new Vector(v2.x * v1, v2.y * v1);
//  		else 
//  			console.error("Vector.mul() needs vector to scalar or vice versa, or vector to vector");
//  	};

//  	Vector.div = function(v, s) {
//  		if(v1 instanceof Vector && v2 instanceof Vector) 
//  			return new Vector(v1.x / v2.x, v1.y / v2.y);
//  		else if(v1 instanceof Vector)
//  			return new Vector(v1.x / v2, v1.y / v2);
//  		else if(v2 instanceof Vector) 
//  			return new Vector(v2.x / v1, v2.y / v1);
//  		else 
//  			console.error("Vector.div() needs vector to scalar or vice versa, or vector to vector");
//  	};

//  	Vector.dot = function(v1, v2) {
//  		return v1.x * v2.x + v1.y * v2.y;
//  	};

//  	Vector.lerp = function(norm, v1, v2) {

//  		var v = Vector.sub(v2, v1);

//  		v.mul(norm);
//  		v.add(v1);

//  		return v;
//  	}

//  	return Vector;

// })();