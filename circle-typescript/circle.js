var Circle = /** @class */ (function () {
    //to create a constructor with optional parameter
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    //function to get radius value with number as return type
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    //function to set radius value
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    //function to get color value with custom return type colorData
    Circle.prototype.getColor = function () {
        return this.color;
    };
    //function to set the color value
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    //to return string of member variables value
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    //to compute and return circle area using radius
    Circle.prototype.getArea = function () {
        return ((Math.PI) * this.radius * this.radius);
    };
    //to compute and return circle circumference using radius
    Circle.prototype.getCircumference = function () {
        return (2 * (Math.PI) * this.radius);
    };
    return Circle;
}());
var a = new Circle();
console.log("Constructor with no params: " + a.toString());
//to invoke the Circle-class constructor with one parameter
var b = new Circle(7.6);
console.log("Constructor with one param: " + b.toString());
//to invoke the Circle-class constructor with all the parameters
var c = new Circle(6.5, 'Yellow');
console.log("getRadius: " + c.getRadius());
c.setRadius(5.2);
console.log("Radius value after setRadius: " + c.getRadius());
console.log("getColor: " + c.getColor());
c.setColor("Green");
console.log("Color after setColor: " + c.getColor());
console.log(c.toString());
console.log("Area od Circle: " + c.getArea());
console.log("Circumference of Circle: " + c.getCircumference());
