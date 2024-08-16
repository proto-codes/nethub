import React from 'react';
import Nav from '../components/Nav';
import coverImg from '../assets/img/Cover_photo_placeholder.png';
import profileImg from '../assets/img/snack1.jpeg';
import Suggestions from '../components/Suggestions';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/profile', { replace: true });
    };

  return (
    <div>
        <div className="container-fluid d-flex">
          <Nav hideNav='nav-hidden' />
          
          <section className='profile-section bg-body overflow-hidden overflow-y-auto'>
            <form method="post">
                <div className="position-sticky top-0 d-flex justify-content-between align-items-center border-bottom p-2 bg-body z-3">
                    <button type="button" className="btn-close" onClick={handleGoBack}></button>

                    {/* Display error message if any */}
                    <p className="text-danger fs-4 m-0"></p>

                    <button type="submit" className="btn bg-custom-color shadow-sm">Save Changes</button>
                </div>

                <div className="position-relative">
                    <img src={coverImg} alt="" className="profile-cover-img w-100" />
                    <i className="bi bi-camera cover-img-icon w-100 h-100 transparent-bg text-body fs-1 d-flex align-items-center justify-content-center cursor-pointer" title="Change Cover Picture!"></i>
                    <img src={profileImg} alt="" className="profile-photo rounded-circle border" />
                    <i className="bi bi-camera profile-photo transparent-bg rounded-circle text-body fs-1 d-flex align-items-center justify-content-center cursor-pointer" title="Change Profile Picture!"></i>
                </div>

                <div className="row mt-3 p-2">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" id='username' className='form-control text-lowercase' name="username" autocomplete="username" placeholder='Username' value='' />
                            <label htmlFor="username">Username</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" id='firstname' className='form-control' name="firstname" placeholder='First Name' value='' />
                            <label htmlFor="firstname">First Name</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" id='lastname' className='form-control' name="lastname" placeholder='Last Name' value='' />
                            <label htmlFor="lastname">Last Name</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" id='nickname' className='form-control' name="nickname" placeholder='Nickname' value='' />
                            <label htmlFor="nickname">Nickname</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" id='email' className='form-control' name="email" autocomplete="email" placeholder='Email' value='' />
                            <label htmlFor="email">Email</label>
                        </div>
                        
                        <div className="form-floating mb-3 dropdown">
                            <input type="tel" id='pnumber' className='form-control' name="pnumber" autocomplete="off" placeholder='Phone Number' value='' />
                            <label htmlFor="pnumber">Phone Number</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="date" id='birthday' className='form-control' name="birthday" placeholder='Birthday' value='' />
                            <label htmlFor="birthday">Birthday</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" id='country' className='form-control' name="country" placeholder='Country' value='' />
                            <label htmlFor="country">Country</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" id='city' className='form-control' name="city" placeholder='City' value='' />
                            <label htmlFor="city">City</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" id='state' className='form-control' name="state" placeholder='State' value='' />
                            <label htmlFor="state">State</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" id='profession' className='form-control' name="profession" placeholder='Profession' value='' />
                            <label htmlFor="profession">Profession</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" id='relationship' className='form-control' name="relationship" placeholder='Relationship' value='' />
                            <label htmlFor="relationship">Relationship</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="text" id='website' className='form-control' name="website" placeholder='Website' value='' />
                            <label htmlFor="website">Website</label>
                        </div>                    
                        
                        <div className="form-floating mb-3">
                            <textarea id='bio' className='form-control' name="bio" placeholder='Bio'></textarea>
                            <label htmlFor="bio">Bio</label>
                        </div>
                    </div>
                </div>
            </form>
          </section>
          
          <Suggestions />
        </div>
    </div>
  )
}

export default EditProfile
