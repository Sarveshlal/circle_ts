class Circle{
    radius : number = 1.0
    color: string = "Red"

    //to create a constructor with optional parameter
    constructor(radius?:number, color?:string){
        if(typeof(radius)!=="undefined") { this.radius = radius }
        if(typeof(color)!=="undefined") { this.color = color }
    }
    
    //function to get radius value with number as return type
    getRadius():number{
        return this.radius
    }

    //function to set radius value
    setRadius(radius:number){
        this.radius = radius
    }

    //function to get color value with custom return type colorData
    getColor():string{
        return this.color
    }

    //function to set the color value
    setColor(color:string){
        this.color = color
    }

    //to return string of member variables value
    toString():String{
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    //to compute and return circle area using radius
    getArea():number{
        return ((Math.PI)*this.radius*this.radius)
    }

    //to compute and return circle circumference using radius
    getCircumference():number{
        return (2*(Math.PI)*this.radius)
    }
}

let a = new Circle()
console.log("Constructor with no params: "+ a.toString())

//to invoke the Circle-class constructor with one parameter
let b = new Circle(7.6)
console.log("Constructor with one param: "+ b.toString())

//to invoke the Circle-class constructor with all the parameters
let c = new Circle(6.5, 'Yellow')
console.log("getRadius: "+c.getRadius())
c.setRadius(5.2)
console.log("Radius value after setRadius: " +c.getRadius())
console.log("getColor: "+c.getColor())
c.setColor("Green")
console.log("Color after setColor: " + c.getColor())
console.log(c.toString())
console.log("Area od Circle: "+c.getArea())
console.log("Circumference of Circle: "+c.getCircumference())