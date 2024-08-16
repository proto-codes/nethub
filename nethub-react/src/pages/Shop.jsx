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

      <button type="submit" className='btn bg-custom-color' data-bs-toggle="modal" data-bs-target="#bsModal">Edit Profile</button>
      <div className="modal fade" id="bsModal" tabindex="-1" aria-labelledby="bsModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                  <div className="modal-header">
                  <h5 className="modal-title">Modal Title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  Body
                  </div>
                  <div className="modal-footer">
                  Footer
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Shop;
