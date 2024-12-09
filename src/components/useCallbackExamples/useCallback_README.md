useCallback Hook

What?
useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

Why?
It is usefull when passing callback to optimized child components that rely on reference equality to prevent unnecessary renders.

