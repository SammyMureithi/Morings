const str_prim="Hello world";

const str_obj=new String("Hello world");

console.log(typeof str_prim);
console.log(typeof str_obj);
//String primitive and sctring object give different results when using eval()

let str_primitive='2+2';

let str_object= new String('2+2');

console.log(eval(str_primitive));// returns 4
console.log(eval(str_object));//returns string '2+2'

//String Object can always be converted to string primitive
let toObject=str_primitive.valueOf();

console.log(typeof toObject);
console.log(eval(toObject))