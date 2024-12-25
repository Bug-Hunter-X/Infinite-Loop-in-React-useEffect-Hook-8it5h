```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: updates count every render cycle
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```