const cerrencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "TEN": 1000,
  "FIVE": 500,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
  let changeSum = cash * 100 - price * 100;
  let changeSumCheck = changeSum;
  let change = [];
  let status = "";

  let cidSum = 0;
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

  filteredCid.forEach(elem => {
    let curr = elem[0];
    let currSum = elem[1] * 100;
    cidSum += currSum;
    let amount = 0

    while(changeSum >= cerrencyUnit[curr] && currSum > 0){
      amount += cerrencyUnit[curr];
      changeSum -= cerrencyUnit[curr];
      currSum -= cerrencyUnit[curr];
    }
    if(amount !== 0){
      change.push([curr, amount / 100]);
    }
  });
  if(changeSum > 0){
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  else if(changeSum == 0 && changeSumCheck == cidSum){
    status = "CLOSED";
    change = cid;
  }
  else{
    status = "OPEN"
  }
  return {"status": status, "change": change};
}

let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let result = checkCashRegister(19.5, 20, cid);
   console.log(result);