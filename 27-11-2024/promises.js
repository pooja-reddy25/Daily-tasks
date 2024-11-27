function checkNumber(num){
    return new Promise((resolve,reject)=>{
        if(num>10){
            resolve("Number is greater than 10!");
        }else{
            reject("Number is less than or equal to 10");
        }
    },1000);
}
checkNumber(15)
checkNumber(4)
.then((message)=>console.log(message))
.catch((error)=> console.log(error));

function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ userId: 1, name: "John Doe" }), 1000);
    });
  }
  
  function fetchOrders(userId) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(["Order1", "Order2", "Order3"]), 1000);
    });
  }
  
  fetchUserData()
    .then((user) => {
      console.log("User:", user);
      return fetchOrders(user.userId); // Pass userId to fetchOrders
    })
    .then((orders) => console.log("Orders:", orders))
    .catch((error) => console.error(error));
  