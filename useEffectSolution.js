The solution involves using a cleanup function within the `useEffect` hook to cancel any ongoing asynchronous operations when the component unmounts.  We also use a state variable to track whether the component is mounted. 

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (isMounted) {
        setData('Data fetched!');
      }
    };

    fetchData();

    return () => {
      setIsMounted(false); //Prevent state update after unmount
    };
  }, []);

  return (
    <View>
      {data ? <Text>{data}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default MyComponent;
```