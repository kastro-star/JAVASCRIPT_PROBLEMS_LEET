//     js learning leeetcode 
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
  var l =init;
  
return{ 
  increment(){
      return ++l;
  },
  reset(){
       l = init;
     
      return l;
  },
  decrement(){
      return --l;
  }
}

};


/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/