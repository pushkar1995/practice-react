What is difference between useCallback and useMemo hook? From ChatGPT

The `useCallback` and `useMemo` hooks in React are both used for performance optimization by memoizing values, but they serve different purposes and are used in different contexts. Here's a detailed breakdown of the differences:

### 1. **Purpose**:
- **`useMemo`**: 
  - **Memoizes values** (like the result of a computation) to avoid recalculating it on every render.
  - It is used when you need to store the result of a function (typically a calculation or transformation) and prevent unnecessary recalculations if the dependencies haven't changed.
  
- **`useCallback`**:
  - **Memoizes functions** to avoid creating a new function instance on each render.
  - It is used when you want to preserve a function reference across renders and avoid unnecessary re-renders of child components or hooks that depend on that function.

### 2. **Returned Value**:
- **`useMemo`** returns a **memoized value** (the result of the function you provided).
  ```javascript
  const memoizedValue = useMemo(() => expensiveCalculation(value), [value]);
  ```

- **`useCallback`** returns a **memoized function** (the function itself).
  ```javascript
  const memoizedCallback = useCallback(() => { /* do something */ }, [dependency]);
  ```

### 3. **Use Cases**:
- **`useMemo`** is used when:
  - You want to **memoize the result of a function** (i.e., a computed value).
  - It can help avoid unnecessary recalculations of a value, especially when it's computationally expensive.
  - Commonly used when transforming large arrays or objects, or performing costly operations.
  
- **`useCallback`** is used when:
  - You want to **memoize a function reference** to prevent unnecessary re-creations of the function on every render.
  - It is particularly useful when you pass a function as a prop to child components or use it in hooks like `useEffect`, `useMemo`, etc.
  
### 4. **Dependency Array**:
Both hooks take a dependency array, which specifies when the memoized value or function should be recalculated. The key difference is that:
- In **`useMemo`**, the dependencies affect the **result** of the memoized function.
- In **`useCallback`**, the dependencies affect the **function reference**.

### Example to Clarify:

#### Using `useMemo`:
Suppose you have an expensive calculation:
```javascript
const MyComponent = ({ number }) => {
  const squaredNumber = useMemo(() => {
    console.log("Calculating square");
    return number * number;
  }, [number]);

  return <div>{squaredNumber}</div>;
};
```
In this example:
- `squaredNumber` will be recalculated only when the `number` prop changes.
- The result of the computation (i.e., `number * number`) is memoized.

#### Using `useCallback`:
Suppose you want to prevent a function from being recreated on every render:
```javascript
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoize the callback function
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={increment} />;
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment</button>;
});
```
In this example:
- The `increment` function is memoized, so it will not be recreated on each render of `ParentComponent`.
- `ChildComponent` will only re-render if the `increment` function changes.

Key Differences:

Feature	    useMemo	                    useCallback

Purpose	    Memoizes computed values	Memoizes functions

Returns 	Memoized result (value)	    Memoized function reference

Common Use
Case	    Expensive calculations or transformations	Prevent unnecessary re-creations  of functions

Example	    const memoizedValue = 
            useMemo(() => computeExpensiveValue(), [dep]);

            const memoizedCallback=useCallback(() => { /* do something */ }, [dep]);

### Summary:
- Use **`useMemo`** when you want to optimize **expensive calculations** and store their results.
- Use **`useCallback`** when you want to memoize **functions**, preventing unnecessary re-creations of those functions between renders.

In general:
- **`useMemo`** is for memoizing **values**.
- **`useCallback`** is for memoizing **functions**.