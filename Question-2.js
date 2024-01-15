// Circle - Class
// Convert the UML diagram to Typescript class. - use number for double


class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius() {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor() {
        this.color = color;
    }
    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`
    }
    getArea() {
        return Math.PI *Math.pow(this.radius,2)
    }
    getCircumference() {
        return 2*Math.PI*this.radius
    }
}
let myCircle = new Circle(1.0, "red");

console.log(myCircle);
console.log("radius:", myCircle.getRadius());
console.log("Radius type:", typeof myCircle.getRadius());
console.log("color:", myCircle.getColor());
console.log("Color type:", typeof myCircle.getColor());
console.log(myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());

/* Output:
Circle { radius: 1, color: 'red' }
radius: 1
Radius type: number
color: red
Color type: string
Circle[radius=1,color=red]
Area: 3.141592653589793
Circumference: 6.283185307179586
*/

