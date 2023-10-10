import React from 'react';
import useAppSelector './hook/redux';
function App() {
  const {} = useAppSelector((state) => state.userReducer)
  return (
    <div className="App">
      
      work!

    </div>
  );
}

export default App;
