// // alert('Hello world!');
// // const message='hello!';
// // alert(message);
// // let sum=1+2+3+4/5;
// // sum=sum+message;
// // alert(sum);
// let name=prompt('Enter your name!');
// let message='Your name is:' + name;
// alert(message);
// console.log(message);
// document.write(message);

// let age=prompt('Enter your age!');
// let message='Next year you are:' + age+1;
// console.log(message);
// function add(a,b){
//   return a+b;
// };
// const c=add(20,30)

// document.write(c);
// document.write('<br>');
// const d=add(20,40);
// document.write(d);
// function print(val){
//     document.write(val+'<br>');};
// //     print(c);
// //     print(d);


// function checkage(age){
// if (age<18) 
// {return 'You are child! To 18 left:' + (18-age) }

// else {return 'You are adult!'}
// };

// let age=Number(prompt('Enter your age!'));
// print(checkage(age));

alert('Our equation has the next sight a*x*x+b*x+c=0')
document.write('<br>');
alert('Please enter yor dates');


function d(a,b,c){
   return b*b-4*a*c
};
let a=Number(prompt('Enter your a!'));
let b=Number(prompt('Enter your b!'));
let c=Number(prompt('Enter your c!'));
function decisionEquation(a,b,c){
if (d(a,b,c)<0){
    return 'You do not have any decision:' 
}
else{
    if (d(a,b,c)===0){
    return 'You have only one decision:  x=  ' + (-b/(2*a))
    }
    else {return 'You have two decisions:  x1=' + (-b+Math.sqrt(d(a,b,c)))/(2*a) + '   x2=' + (-b-Math.sqrt(d(a,b,c)))/(2*a)}
}}
function print(val){
    document.write(val+'<br>');};
 print(decisionEquation(a,b,c));