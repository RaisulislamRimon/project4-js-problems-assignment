// 1. radianToDegree
function radianToDegree(radian) {
  // number type checking
  if (typeof radian === "number") {
    const degree = radian * (180 / Math.PI);
    // convert string type to float
    return parseFloat(degree.toFixed(2));
  } else {
    return "Your input is not a number";
  }
}
// 2. isJavaScriptFile
function isJavaScriptFile(fileName) {
  // checking if the file name is a string with .js extension
  return fileName.endsWith(".js");
}
// 3. oilPrice
function oilPrice(dieselQuantity, petrolQuantity, octenQuantity) {
  // less than 0 liter checking
  if (dieselQuantity < 0 || petrolQuantity < 0 || octenQuantity < 0) {
    return "You can't enter a negative number of liter of oil.";
  } else if (
    // input type checking
    typeof dieselQuantity !== "number" ||
    typeof petrolQuantity !== "number" ||
    typeof octenQuantity !== "number"
  ) {
    return "Please enter a valid number of liter to buy fuel.";
  } else {
    // input type int or decimal checking
    if (
      Number.isInteger(dieselQuantity) === false ||
      Number.isInteger(petrolQuantity) === false ||
      Number.isInteger(octenQuantity) === false
    ) {
      console.log(dieselQuantity, petrolQuantity, octenQuantity);
      const dieselPricePerLiter = 114;
      const petrolPricePerLiter = 130;
      const octenPricePerLiter = 135;
      const totalPrice =
        dieselPricePerLiter * dieselQuantity +
        petrolPricePerLiter * petrolQuantity +
        octenPricePerLiter * octenQuantity;
      console.log(typeof totalPrice.toFixed(2));
      console.log(typeof parseFloat(totalPrice.toFixed(2)));
      return parseFloat(totalPrice.toFixed(2));
    } else {
      // main function of buying fuel is working now
      const dieselPricePerLiter = 114;
      const petrolPricePerLiter = 130;
      const octenPricePerLiter = 135;
      const totalPrice =
        dieselPricePerLiter * dieselQuantity +
        petrolPricePerLiter * petrolQuantity +
        octenPricePerLiter * octenQuantity;
      return totalPrice;
    }
  }
}
// 4. publicBusFare
function publicBusFare(totalPeopleCount) {
  if (
    // checking if the totalPeopleCount is a number
    typeof totalPeopleCount === "number" &&
    Number.isInteger(totalPeopleCount)
  ) {
    // checking if the totalPeopleCount is a positive number
    console.log(typeof totalPeopleCount);
    if (totalPeopleCount < 0) {
      // console.log(typeof totalPeopleCount);
      return "You can not enter a negative number because people are allowed to travel";
    } else if (totalPeopleCount === 0) {
      // console.log(typeof totalPeopleCount);
      return "You can not enter 0";
    } else {
      // console.log(typeof totalPeopleCount);
      const publicBusFare = 250;
      const busCapacity = 50;
      const microbusCapacity = 11;
      if (totalPeopleCount === busCapacity) {
        return totalPeopleCount % busCapacity;
      } else if (totalPeopleCount === microbusCapacity) {
        return totalPeopleCount % microbusCapacity;
      } else if (totalPeopleCount % busCapacity !== 0) {
        const peopleInMicrobus = totalPeopleCount % busCapacity;
        console.log(peopleInMicrobus);
        if (peopleInMicrobus % microbusCapacity !== 0) {
          const peopleInPublicBus = peopleInMicrobus % microbusCapacity;
          console.log(peopleInPublicBus);
          const totalPublicBusFare = peopleInPublicBus * publicBusFare;
          return totalPublicBusFare;
        }
      }
    }
  } else {
    return "Please enter a valid number of total people";
  }
}
// 5. isBestFriend
function isBestFriend(firstFriend, secondFriend) {
  if (
    firstFriend.name === secondFriend.friend &&
    firstFriend.friend === secondFriend.name &&
    typeof firstFriend.name === "string" &&
    typeof firstFriend.friend === "string" &&
    typeof secondFriend.name === "string" &&
    typeof secondFriend.friend === "string"
  ) {
    return true;
  } else {
    return false;
  }
}
