function mySum(...nums) {
  return nums.reduce((acc, el2) => {
    return acc += el2;
  });
}


Function.prototype.myBind = function() { 
  const context = Array.from(arguments)[0];
  const args = Array.from(arguments).slice(1);
  let that = this;
  
  return function() {
    that.apply(context, args.concat(Array.from(arguments)));
  };
};


Function.prototype.restBind = function (context, ...args) {
  return (...otherArgs) => {
    this.apply(context, [...args, ...otherArgs]);
  };
};


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");


function curriedSum(numArgs) {
  const numbers = [];
  
  function _curriedSum(num) {
    numbers.push(num)
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => {
        return acc + el
      })
    } else {
      return _curriedSum
    }
    
  }
  return _curriedSum
}



Function.prototype.curry = function(numArgs) {
  const args = [];
  let that = this;
  
  function _curriedFunc(arg) {
    args.push(arg)
    
    if (args.length === numArgs) {
      return that.apply(this, args)
    } else {
      return _curriedFunc
    }
    
  }
  return _curriedFunc
}


Function.prototype.currySpread = function(numArgs) {
  const args = [];
  let that = this;
  
  function _curriedFunc(arg) {
    args.push(arg)
    
    if (args.length === numArgs) {
      return that(...args)
    } else {
      return _curriedFunc
    }
    
  }
  return _curriedFunc
}












