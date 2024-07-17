//Promises Async Await
// // let add = ()=>a+b ;
// // console.log(add(1,2));
// //  let free =()=>{
// //     console.log(this)
// //  }
// function wish (){
//     console.log("good")
// }
// wish();

// let wish =()=>{
//     console.log("good")
// }
// wish();

// let promise = new Promise((resolve,reject)=>{
//     console.log("gn")
//     resolve("Success");
// })
/*function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}*/
// -----------------------
/*const getPromise = ()=> {
    return new Promise((resolve,reject)=>{
        console.log("it is a promise");
        resolve("success");
        error("404 error")
    });
    };
   let promise = getPromise();

   promise.then((res)=>{
    console.log("promise success",res)
   });
promise.catch((err)=>{
    console.log("promise not success",err)
   });*/
//    -------------------
/* function asyncfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    })
   }
   function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    })
   }
   console.log("fetching data1...");
   let p1 =asyncfunc1();
   p1.then((res)=>{
    console.log(res);
   });
   console.log("fetching data2...");
   let p2 =asyncfunc2();
   p1.then((res)=>{
    console.log(res);
   });*/
//Promises chain....
function asyncfunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}
function asyncfunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000);
  });
}
/*console.log("fetching data1...");
asyncfunc1().then((res) => {
  //console.log(res);
  console.log("fetching data2...");
  asyncfunc2().then((res) => {
    //console.log(res);
  });
});*/
//or---------------
/*console.log("fetching data1...");
asyncfunc1()
.then((res) => {
    console.log("fetching data2...");
  return asyncfunc2();
}).then((res) => {
    //console.log(res);
  });*/
//ASYNC_AWAIT------------------------
/*async function hello(){
  console.log("good evening");
}*/
/*function speedoMeter() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("speed is tracked");
     resolve("success")
    },2000)
  });
};

async function meterRead(){
  await speedoMeter();
  await speedoMeter();
  await speedoMeter();
  

}*/

/*function getData(dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data",dataId);
      resolve('success');
    },2000);
  
  })
}
async function readData(){
  await getData(1)
  await getData(2)
  await getData(3)
};
// using IIFE-----
(async function (){
  await getData(1)
  await getData(2)
  await getData(3)
})();
0 */
