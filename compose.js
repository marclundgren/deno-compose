function compose(...funcs) {
  if (funcs.length === 0) return (arg) => arg;

  if (funcs.length === 1) return (...args) => funcs[0](...args);

  const reversedFuncs = funcs.reverse();
  reversedFuncs.forEach((f) => {
    console.log("f", f + "");
  });

  return (...args) => {
    console.log({ args });
    return reversedFuncs.reduce(
      (accArgs, func) => {
        console.table({ accArgs, func: func + "" });
        debugger;
        const result = func(...accArgs);
        const result = func.apply(null, accArgs);
        console.log({ result });
        return result;
      },
      [args]
    );
  };
}

export default compose;
