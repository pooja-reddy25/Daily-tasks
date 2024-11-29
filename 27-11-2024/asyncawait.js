async function checkNumber(num) {
  try {
    if (num > 10) {
      return "Number is greater than 10!";
    } else {
      throw new Error("Number is less than or equal to 10.");
    }
  } catch (error) {
    return error.message;
  }
}

(async () => {
  console.log(await checkNumber(15));
  console.log(await checkNumber(5));
})();


async function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: 1, name: "John Doe" }), 1000);
  });
}

async function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Order1", "Order2", "Order3"]), 1000);
  });
}

async function fetchDetails() {
  try {
    const user = await fetchUserData();
    console.log("User:", user);

    const orders = await fetchOrders(user.userId);
    console.log("Orders:", orders);
  } catch (error) {
    console.error(error);
  }
}

fetchDetails();
