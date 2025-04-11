class circle{
    constructor(radius){
        this._radius = radius;
        }
        get diameter(){
            return this._radius *2;

    }
    set diameter(diameter){
        return this._radius /2;

    
    }
}
const myCircle = new circle(5);
console.log(myCircle.diameter);

myCircle.diameter = 14;
console.log(myCircle._radius);
console.log(myCircle.circle);
