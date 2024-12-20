//TYPSCRIPT :
// whole js is typescript 
// ts makes code easier for large project

// TO CREATE TSCONFIG.JSON:
// on terminal tsc --init
// it will create thejson file

// index.js.map file's code tell us how our TScode map with JS code

// Build in types :
// let sale : number = 123456  // ts knows the sale is number without metion
// let course: string = "yes" // ts knows course is string
// let build_in : boolean = true  // sameas boolean


// let sale = 123456  // so we do not have to mention that in code
// let course= "yes"
// let build_in = true 
//let level; //this level without initialize ts knows it is "type any"


// The type any:

// the type any is type that aloowd variable to hold any kind of value like string boolean number
// type script would not check this error 

// for eg ----
//let level: any;
// let level ="2"
// let level = 2

//type any only use when we do not acre about the value because it give mostly error and time consuming

// ts knows it is as type any so we can write it as 
// let level ="2"
// let level = 2
// but this is not right while using ts it's against of ts as we are assigning any value

// Arrays:
//let a: number[]= [1,3,"5"] // it give error as we added string in array alsogive annotation of number
// let a: number[]= [1,3,5] the right  way ofusing annotation it tells what is error

// Tuple:
// let user: [string , number, boolean] = ["neha",1 ,true] this is wrong // always make sure to give only two value coz more than that it makes code difficult to understand also it is type of array
// only use tuple when we have two value like key value
//for use user. it tells you about methods of array


//Enum:
// use pascalcase meansfirst letters caps
// enums always use in string and numeric
// enum Size {Small, Medium,tall} default enum give value from 0 and then increment so,here 
// Samll = 0
// Medium = 1
// Tall = 2
// we can also assign value it will give increament from therelike
// enum Size {Small = 1 , Medium = 2,tall =3}
// console.log(Size.Medium) //2
// for not increament we can assign unique numbers to value 
// alsowe can use string inenum for asign value 
// enum Size {Small = "s" , Medium = "m",tall ="t"}
// console.log(Size.Medium) // m
// enum Size {Small = 1 , Medium  , tall } // for first number also it increment
// let value : Size = Size.Medium
// console.log(value)

// using const keyword ts compiler give good optimize code in js -const:
// const enum Size {Small = 1 , Medium  , tall } // for first number also it increment
// let value : Size = Size.Medium
// console.log(value)


//functions:
// function user(income:number, job: number): number //job  = 300 to remove argument while calling
// {
//     if (income>500)
//         return job*2 //  :number is annonation which means returning value must be number
//     return job*4 // both parameter income and job must be declare
    
// }
// user(2022, 67777)
// console.log(user)

//objects:
//1)
// if we try to add something in object shows error
// let names = { stu1 : "neha"} // hover on names it shows stu1 is type of string
// names.age = 1  //shwoing error as it is not declarein key value as it is not JS 
//2)
// let names = { stu1 : "neha",
//     age : 1
// } // it shows while hover on names have one number and string 

// 3) we can also tells clearly to our object that we need only number and string except that it will give error for that

// let names: {
//     age : number,
//     stu1 : string
// } = { stu1 : "neha",
//     age : 1
// }
// here :
// let names: {
//     age : number,
//     stu1 : string
// }
//this part is only object telling there key value type
// object with property add:
// let emplyoo:{
//     readonly id: number,
//     name : string,
//     retire: (date:Date) => void 
// } = {
//     id :1,
//     name : "neha",
//     retire:(date:Date) => {
//         console.log(date)
//     }
// }
// on this wehave to repeat code for next employee for resolving this "ALISAS TYPE USE"


// ADVANCE TYPES :
// ALIASES TYPE:
// type Employee = {
//     readonly id: number,
//     name : string,
//     retire: (date:Date) => void 
// }
// let emplyoo: Employee= {
//     id :1,
//     name : "neha",
//     retire:(date:Date) => {
//         console.log(date)
//     }
// }
// now type Employee have all methoads we can add for every emplooyee we do not have to repeat the code just use :Employee while creating for next employe
// also we can add the elements for all emplyoee in Employee


// UNION TYPE:
// using with "|" symbol for variable to hold value more than one
// union type is not part of compilied js it is only for compile to checking the type
// function user_Weight (weight : number|string): number{
//     if (typeof weight === "number") //typeof use to tell the type of weight is number (to determine type of value)
//         return weight*3.2;
//     else
//     return parseInt(weight)*3.3
// }
// user_Weight(10)
// user_Weight("10")

//INTERSECTION TYPE:
//using "&" operator
// we can not use function user_Weight (weight : number & string) together
// for that we create one type for string another type of number and useit in one intersection type(combine multiple type in one)
//also resulted type have all property of theintersected types
//also we need to re declare the elements of intersected types in main resulted type

// type Person={
//     name:string,
//     age:number
// }
// type Person2 ={
//     id: number,
//     address : string
// }

// type Main= Person & Person2

// let detail: Main = {
//     name:"neha",
//     age:24,
//     id: 345,
//     address : "A34/45"

// }
// console.log(detail) //detail.name = neha

//LITERALTYPES:
// this type allow you to give specific value to the type we create uisng union type
// type address ="e"|"w"
// let main: address
// main="e" // right
// main ="j" //wrong  as it is not declare in type
// same with boolean , number

//NULLABLE TYPE:
//allow value to be null or undefined 
// we can only use thiswith union type
// function greet(name:string|null|undefined){
//     if (name)
//         console.log(name)
//     else
//     console.log("hola")
// }
// greet(null) // no error as we defined it as union type

// function greet(name:string|undefined)
// greet(null) // showserror


// OPTIONAL CHAINING:
// using null or undefined as
// "?." symbol
//eg:
// type num ={
//     birthday: Date
// }

// function Customer(id:number):num|null|undefined{
//     return id === 0 ? null:{birthday :new Date()}
// }
// let result =Customer(0)
// console.log(result?.birthday)

//TYPE ASSERTION:
// sometimes we are not able to find the type of variable method so we use type assertion for that
// let user= "neha"
// user. // we get the method of string

// but
// let user;
// user = "neha"
// user. // we will not get 
// for thiswe have two waysto get method of typw
// 1) let user;
// user = "neha"
// (<string>user).// will get method

//2) // let user;
// user = "neha"
// (user as string). // will get method

// some htmlelememt : 
// htmlinputelement:
// .getelemnetbyid
// .addevntlistener for this

// let user = document.addeventlistener("neha") as htmlinputelemnt

// this is also same as (as htmlinputelemnt) =(user as string)
// let user = <htmlinputelemnt>document.addeventlistener("neha") 


// The UNKNOWN TYPE:
// better to use unknown type in code rather than any 
// it tells if the object's method is existing or not 
// and give us error if not 

// function user(document:unknown){
// user.// method(if exiating no error if not it wil give)}


// THE NEVER TYPE:
// breaking code and not returning anything is never type
// void give undefine 
// never error

//OBJECT- ORIENTED PROGRAMING:
// It is programing paradigms also we can say style.
// there are many paradigms and styles ineach programing lan
// In JS and TS both support OOPS and FUNCTIONAL paradigms
// OOPS contain many object working toghther in same apllication.

// OBJECTS:
// objects have some data and operation
// in which data contain name,age,email and operation contain roles, profession
// we call data as poperty in object and opersation contain function inside it which we call methods in objects

// CLASESS:
// OOPS is all about objects and for creating object we need to create a class first
// A class is a blueprint for creating objects.
// Every CLASS contain some property and methods

// THROW STATEMENT:
// it is use to handlethe error in code 
// wecan use it when we want to shows an error in code
// itstop rest flow of code 

// READONLY AND OPTIONAL PROPERTY:
// class Account{
//     readonly name: string;   //readonly which cannt modify after assign value
//     id?: string;  // optional which is not have to initialize it's optional
//     num : number

//     constructor(name: string, num: number){
//         this.name=name;
//         this.num= num;
//     }
// }
// let obj = new Account("neha", 89)
// console.log(obj,name)
// obj.name = "samyak" // giveerror

// class Account{
//     readonly name: string;
//     id?: string;
//     num : number

//     constructor(name: string, num: number){
//         this.name=name;
//         this.num= num;
//     }
// }
// let obj = new Account("neha", 89)
// console.log(obj.id)


//ACCESS CONTROL KEYWORDS:
// private:
// class Account{
//     readonly name: string;   //readonly which cannt modify after assign value
//     private id?: string;  // optional which is not have to initialize it's optional
//     num : number

//     constructor(name: string, num: number){
//         this.name=name;
//         this.num= num;
//        // console.log(obj.id)  this is right in private keyword
//     }
// }
// let obj = new Account("neha", 89)
// console.log(obj.id) // give error as we only can access the property under property classin private

// protected:
// class Account{
//     readonly name: string;   //readonly which cannt modify after assign value
//     private id?: string;  // optional which is not have to initialize it's optional
//     num : number

//     constructor(name: string, num: number){
//         this.name=name;
//         this.num= num;
//        // console.log(obj.id)  this is right in private keyword
//     }

//     private property(){  // only access under this class
//         ""
//     }
// }
// let obj = new Account("neha", 89)
// console.log(obj.id) // give error as we only can access the property under property classin private


// PERAMETER PROPERTY:
// as you know we have to create constructor to initialize the class property to make that easy
// we use perameter : this is hard code to make it easy parameer property make it
// class Account{
//     //readonly name: string; 
//     //private id?: string; 
//     //num : number

//     constructor(
//      public readonly name: string, 
//       private_num: number){
//         this.name=name;
//         this.num= num;
//    }

// parameter property
// class Account{
//    nick? : string 
//
//     constructor(
//      public readonly name: string, 
//       private_num: number){
//    }
// }

//GETTER AND SETTER :
// use to define properties to access and modified as before 

// INDEX SINGNATURE:
// in JS wecan change the value dynamically so on for that we use index signature to changethe value in TS dynamically
// class Account{
//     // A1: string,
//     // A2: string
//     [Seats : string]: string
// }

// let obj = new Account()
// obj.A1 = "neha"
// obj.A2 = "mehar"  // we can change dynamically as JS 

//STATIC MEMBER:
// in this property belongs to class not object.

// INHERITANCE:
//extracting property and method and put that in parent class


// PROTECTED MEMBERS:
// not that really use in code 
// it is similiar that private but it can be inheritate in child class


//ABSTRACTCLASSES AND METHODS:
// abastract method only appear under abstractclass 
// abstract is like uncook meal

//INTERFACE :
// TO define shape of an object
// we use abstract when we have to implement in our methods 
// as the interface does not implement method.

// interface Calendar{
// name: string,
// addevent(),
// removeevent()
// }
// interface cloud extends Calendar {//means all property of Calender cloud are taking also adding something
//     sync()}


//CLASS IMPLEMENT THE CALENDAR INTERFACE:
// for that we use "implement"
// class gooogle implement Calendar{} press ctrl . -- to auto code

// GENERIC INTERFACE -- UNDERSTANDINGTHE PROBLEM:

// class Keyvalu{
//  constructor(public id : number, public name: string){}}
// let result = new.Keyvalu("1", "neha")  // give error as the id is number to remove the error we can do
// make one more class--
// class Keyvalu{
//  constructor(public id : number, public name: string){}}
// class Keyvalue{
//  constructor(public id : string, public name: string){}}
// let result = new Keyvalue("1", "neha")
// result.id.  // no errorbutwe cannot do this to every class so for solving this we use GENERIC CLASS

// GENERIC CLASSES:
// use for reuable the code
//it mostly refersto "T" in the parameter of classes
// class keyval <K,V>{
//     constructor (public key: K , public value: V){}  //K is for key  v is for value

//     let obj = new keyval<string , number>("I","9") //<string is optional
//     obj.keyval.// string or number method
// }


// GENERIC FUNCTION:
// class Dom{
//     refer<T>(value:T){
//         return [value]
//     }
// }
// let untentil = new Dom()
// let number = untentil.refer(9)


// GENERIC CONSTRAINTS:
// interface person{ // give shape togeneric in form ofkeyvalue
// name :string
// }
// fun echo<T exteends person (value :T):T{
//     return value
// }
// echo ({name: "neha"})


// EXTENDING GENERIC CLASSES:
// generic is "T" what if we limit thevalueof generic
// function echo<T extands string||null>(value :T):T{
//     return value
// }

// echo("neha")  // give error if number orboolean provide

// BY USING SHAPE IN GENERIC:
// shape mention in  //{} name:string
// function echo<T extends {name:string}>(value :T):T{
//     return value
// }

// echo({name: "neha"}) 

//GENERIC CLASSES AND INHERITANCE:
// interface Product{
//     name: string,
//     price: number
// }

// class Store {
//     obj:T[] =[] // doing thiswe can also initialize contructor
// }

// pass onthegeneric type parameter:
// class Compree<T>extends Store<T>{
//     compress(){

//     }

// }
// let store = neCompree<Product>()
// store.compress()

//THE KEY OF OPERATORE:
// IMPLEMENT FIND METHOD IN CLASS
// interface Product{
//     name: string,
//     price: number
// }

// class Store {
//     obj:T[] =[] // doing thiswe can also initialize contructor
// }
// find(property, value)  // weare able to find property with thisvalue
//giving type
// find(property: string , value: number):T|undefine{
//}

//TYPE MAPPING:
// we using type mapping so that wedo not have to write property in both objects
//we use type object

// interface obj{
// name : string,
// price: number
// }
// type READONLY obj{
// readonly [property in keyof obj]: obj[property]  // in -interate over obj property, keyofoperator take property of obj,, obj[property] -- if name return string if price return number
// 
// } // we make existing obj type readonly so it works dynamically
//
//
// readonly [property in keyof obj]: obj[property]  -- this is we call type mapping that we do not have to mention seperateelsewe do in one line taking all property of existing obj
// what if there is customer notproduct for that we make this line as:
// readonly<T> [property in keyof T]: T[product]
// for product:
// let product : Readonly<product>={
// name ="a",
// price: 8}
// for customer:
// let customer : Readonly<customer>={
//     name="a"
// }
// type optional <T>={
// [k in keyof T]? :T[K]
// }
// type NULLABLE <T>={
//     [k in keyof T]? :T[K] | null
//     }

//DECORATORS:
// types:
// class decorators
// methodsproperty decorators
// accessor decorators
// parameter decorators

// decorators are attribute that we apply over there classes and members with this we can change how they behave it is frequently use in angular and application
// IMP --decorators just a function that calls  js run time.
// Eg:
// @ component //(error asit is not define not buildin)applying this we convert this class into component web application
// class Profile{
// }

// HOW WE CAN CREATE DECORATORS:
// CLASS DECORATORS:
// function Component(constructor:Function) //as the typeof component is classwe use constructor under this fun we can modify delete add the property of class
// {
//     constructor.prototype.uniqueID= Date.now()
//     constructor.prototype.insertDOM = () =>{
//         console.log("inserting value")
//     }
// }

// @ Component  // every property method of function component inheritate in class of every component
// class Profile{
// }


// METHOD DECORATORS:
// instead of parameter in fun use 3 things 1) tagret of method in class, 2) name of the target method 3) descripter object 
// these are 3 parameter we use in method

//ACCESSOR DECORATOR:
// function Capital(target: any, methodName:string, descriptor: property descriptor){
//     const original = descriptor.get
//     descriptor.get = function(){
//         original?.
//     }
// }
// @Capitalize
// get fullName(){
//     return...
// }

//MODULES:
// EXPORTING AND IMPORTING:
// make new modules of shapes then on this modules "write class there and then write export in fornt of class"
// on new modules:
// export class circle{
//}
//in indexmodule:
// import {circle} from './shapes'
// let cicle = new Cicle(1)
// console.log(CSSNumericValue.radius)

// MODULEFORMAT:
//AMD
// UMD
// COMMON JS
// ES2015/ES6
// currently weuse ES module
// generic js codeis deffirent depending upon formats


// DEFAULT EXPORT:
// manyclasses like :
// class store{   //export on module//import in index.ts

// }
// class compressor{} /implementation means inside things do not have to touch only store will do
// class encryptor{}

// WILDCARD IMPORT:
// sometimes we have bunch of class impor by selecting one by one is difficult so we use
// import * as shapes from "./shapes"  // itwill access all property of shapes


// RE-EXPORTING:
// we can have one module combine export the different moduel
// marge file into one module name name idex.ts then write there code then main ts fileonly have to write one line for all shapes

//including js code in ts project:
// create js file under src where we can not use ts code
// then import thatin index
// import {class name in js file} from "./tax"

//SOME STYLE USING TS:
// M -MArin
// h -- horizontal
//- 2 how much 
// mx-2
// making the corner round -- round-pill

//1) to run the code following ways of ts terminal
// for running code in TS terminal use:
// tsc index.ts // tsc file name
// ls
//node index.js // and get result
//2)
// install node pacakge to run thecode :
// npm init-y // generate basic json file
// npm i -D ts-node
// json file created where run the code using ts-node 


// INSTALLING PACAKAGES:
// npm i express
//npm i -D typescript @types/node @types/express   // installing this as ifsomeone use we don't know if they havets downloaded or not wecan take this projectany where
// tsc --init