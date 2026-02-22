//this keyword
const student={
  name:"parth",
  age:21,
  math:95,
  phy:90,
  eng:97,
  getAvg(){
    let avg=(this.math + this.phy +this.eng)/3;
    console.log(avg);
  }

}
//output: 94
student.getAvg();

//try and catch
try{
  console.log(a);
}
catch{
  console.log("caught an error, 'a' is not defined");
}
//output: caught an error, 'a' is not defined


//Arrow function
const sum = (a,b)=>{
  console.log(a+b);

}
sum(5,10);
//output: 15

const cube=(n)=>{
  return n*n*n;

}
cube(3);
//output: 27

const pow=(x,y)=>{
  return x**y;

}
pow(2,3);
//output: 8