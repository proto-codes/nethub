import React from 'react';
import photo from '../assets/img/femalehat.jpeg'

function Suggestions() {
  return (
    <div>
      <div className="suggestions vh-100 d-none d-md-block">
        <h3 className="mb-4">Suggested</h3>
        <div className="suggested">
          <div className="d-flex gap-3 align-items-center justify-content-between">
            <div className="d-flex gap-2 align-items-center">
              <img src={photo} alt="" className="img me-2" />
              <h5 className="text-truncate" style={{width: "5rem"}}>johndoe22</h5>
            </div>
            <button className="btn btn-primary px-2">Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestions;
