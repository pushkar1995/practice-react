useCallback Hook

What?
useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

Why?
It is usefull when passing callback to optimized child components that rely on reference equality to prevent unnecessary renders.

What is useCallback hook? From ChatGPT

The `useCallback` hook in React is used to memoize functions, ensuring that the function reference does not change unnecessarily between renders. This can help optimize performance, especially when passing functions as props to child components or when those functions are used in hooks like `useEffect` or `useMemo`.

### Syntax:
```javascript
const memoizedCallback = useCallback(() => {
  // function logic
}, [dependencies]);
```

- **First argument**: The callback function you want to memoize.
- **Second argument**: A dependency array that determines when the callback function should be recomputed. If any value in this array changes, the callback function will be recreated; if none of the dependencies change, the same function reference will be reused across renders.

### When to Use `useCallback`:
- **Prevent unnecessary re-creations of functions**: Functions created inside components are re-created on every render. If these functions are passed down to child components as props or used in hooks like `useEffect`, they can trigger unnecessary re-renders or recalculations. `useCallback` prevents this by memoizing the function.
- **Optimization with event handlers**: For event handlers or callback functions passed to child components, you can use `useCallback` to prevent unnecessary function re-creation when the component re-renders.
  
### Example:

#### Without `useCallback`:
```javascript
const MyComponent = ({ onClick }) => {
  console.log('Component re-rendered');
  return <button onClick={onClick}>Click Me</button>;
};

const ParentComponent = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <MyComponent onClick={handleClick} />;
};
```
In this example, `handleClick` will be re-created on every render of `ParentComponent`, causing `MyComponent` to re-render each time even if `handleClick` hasn't changed.

#### With `useCallback`:
```javascript
const MyComponent = ({ onClick }) => {
  console.log('Component re-rendered');
  return <button onClick={onClick}>Click Me</button>;
};

const ParentComponent = () => {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array, meaning the function won't change unless something it depends on changes

  return <MyComponent onClick={handleClick} />;
};
```
Here, `handleClick` is memoized using `useCallback`, so it won’t be re-created unless its dependencies change. If there are no dependencies, it will remain the same across all renders of `ParentComponent`.

### Key Points:
1. **Memoizing Functions**: `useCallback` is used to memoize functions, preventing them from being re-created on every render.
2. **Preventing Unnecessary Re-renders**: By using `useCallback`, React doesn't create new function instances on each render, which can help avoid unnecessary re-renders of child components or hook re-executions.
3. **Dependencies Array**: Like `useEffect` or `useMemo`, `useCallback` takes a dependency array. The memoized function is only recreated when the dependencies change.
4. **Performance Considerations**: `useCallback` should be used for performance optimizations in specific cases. It should not be used excessively, as it can add unnecessary complexity to your code. React is optimized well enough to handle most cases without needing `useCallback`.

### Example with Event Handlers:
```javascript
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoizing the increment function to avoid unnecessary re-creations
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // No dependencies, so it will never change

  return <ChildComponent onClick={increment} />;
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
});
```
In this case:
- `increment` is memoized using `useCallback`, so it doesn’t get re-created unless necessary.
- `ChildComponent` will only re-render if the `onClick` handler changes (which it doesn’t, thanks to `useCallback`).
