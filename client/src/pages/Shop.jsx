import React, { useState } from 'react';

function Shop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="App">
      <button onClick={handleVisibility}>
        {isVisible ? 'Hide Popout' : 'Show Popout'}
      </button>
      {isVisible && (
        <div className="popout">
          <h1>Popout Content</h1>
          <p>This is the content inside the popout div.</p>
        </div>
      )}
    </div>
    </div>
  )
}

export default Shop;
