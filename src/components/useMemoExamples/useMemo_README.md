What is useMemo Hook in React? From ChatGPT

The `useMemo` hook in React is a performance optimization tool that allows you to memoize the result of a function. This means that React will recompute the value of a function only when one of its dependencies changes, rather than on every render. This is particularly useful when you have expensive calculations or operations that don't need to be re-executed unless certain values change.

### Syntax
```javascript
const memoizedValue = useMemo(() => {
  // function logic or computation
}, [dependencies]);
```

- **First argument**: A function that returns the value you want to memoize.
- **Second argument**: A dependency array (list of values) that determines when the memoized value should be recalculated. If any value in this array changes between renders, the function will be re-executed. If no values change, React will reuse the previous result.

### When to Use `useMemo`:
- **Expensive calculations**: If you have a computationally expensive function, memoizing its result can prevent unnecessary recalculations on every render.
- **Referential equality**: If you are passing an object or array as a prop and want to ensure that React doesn’t treat it as a new reference on every render, you can memoize that object or array.

### Example:

#### Without `useMemo`:
```javascript
const expensiveCalculation = (num) => {
  console.log("Recalculating...");
  return num * 2;
};

const MyComponent = ({ number }) => {
  const result = expensiveCalculation(number);
  return <div>{result}</div>;
};
```
In this case, `expensiveCalculation` will be re-executed on every render of `MyComponent`, even if `number` hasn’t changed.

#### With `useMemo`:
```javascript
const MyComponent = ({ number }) => {
  const result = useMemo(() => expensiveCalculation(number), [number]);
  return <div>{result}</div>;
};
```
Now, `expensiveCalculation` will only run when `number` changes, preventing unnecessary recalculations on every render.

### Key Points:
- **Memoization**: `useMemo` stores the result of a function call and reuses it until the dependencies change.
- **Optimization**: It's useful for preventing unnecessary re-rendering or recalculations, especially for expensive operations.
- **Not for every case**: Don’t overuse `useMemo`. It’s meant for performance optimization and can introduce complexity. React’s default rendering behavior is usually efficient enough without memoization for most simple use cases.

### Example with Dependency Change:
```javascript
const Component = ({ count, items }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(count));
  }, [count, items]); // Recalculate only when `count` or `items` changes

  return <div>{filteredItems.length}</div>;
};
```
In this case, `filteredItems` will only be recalculated when `count` or `items` change, improving performance if the `items` array is large and `count` changes infrequently.