function receivesAFunction(callBack ) {

    callBack();

}

function returnsANamedFunction() {
    return function namedFn() {
      console.log("a named function");
    };
  }
function returnsAnAnonymousFunction() {
    return () => console.log("an anonymous function");
  }