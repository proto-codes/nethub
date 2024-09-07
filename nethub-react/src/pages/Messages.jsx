import React, { useState } from 'react';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import profile from '../assets/img/malewatches.jpeg';
import { Link, useNavigate } from 'react-router-dom';

function Messages() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [textAreaValue, setTextAreaValue] = useState('');

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="container-fluid d-flex">
          <Nav messagesActive="text-light bg-custom-color active" hideNav='nav-hidden' menuBtn={handleMenuVisibility} />
          {menuVisible && (
            <Menu closeMenuBtn={handleMenuVisibility} />
          )}

          <section className="messages-section">
            <div className="row m-0">
              <div className="col-md-5 p-0 border-end overflow-hidden">
                {/* Message header */}
                <div className="w-100 border-bottom d-flex justify-content-between p-2" style={{height: '5rem'}}>
                  <div className="d-flex align-items-center me-2">
                    <button className="bi bi-arrow-left-short btn d-block d-md-none fs-4 p-0 px-1" onClick={handleGoBack}></button>
                    <img src={profile} alt="profile" className="profile-img me-1" />
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <button className="bi bi-search btn fs-4 p-0 px-1"></button>
                    <button className="bi bi-chat-dots btn fs-4 p-0 px-1"></button>
                    <button className="bi bi-archive btn fs-4 p-0 px-1"></button>
                    <button className="bi bi-three-dots-vertical btn fs-4 p-0 px-1"></button>
                  </div>
                </div>

                
                {/* Nav tabs */}
                <ul className="nav nav-tabs nav-justified position-sticky top-0" role='tablist' style={{height: '3.3rem'}}>
                  <li className="nav-item">
                    <a title='Chats' className="nav-link fs-4 text-body rounded-0 active" id='chats-tab' data-bs-toggle="tab" role='tab' aria-controls='chats' aria-selected='true' href="#chats">
                      <i className="bi bi-chat"></i>
                      <span className='badge bg-secondary ms-1'>2</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a title='Groups' className="nav-link fs-4 text-body rounded-0" id='groups-tab' data-bs-toggle="tab" role='tab' aria-controls='groups' aria-selected='false' href="#groups">
                      <i className="bi bi-people"></i>
                      {/* <span className='badge bg-secondary ms-1'>2</span> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a title='Calls' className="nav-link fs-4 text-body rounded-0" id='calls-tab' data-bs-toggle="tab" role='tab' aria-controls='calls' aria-selected='false' href="#calls">
                      <i className="bi bi-telephone"></i> 
                      {/* <span className='badge bg-secondary ms-1'>2</span> */}
                    </a>
                  </li>
                </ul>


                <div className='position-relative'>
                  {/* Message tabs */}
                  <div className='message-body overflow-auto'>
                    {/* Tab panes */}
                    <div className="tab-content h-100">
                      <div className="tab-pane fade h-100 show active" id="chats" role='tabpanel' aria-labelledby='chats-tab'>
                        {/* Nav tabs */}
                        <ul className="active-msg-tab nav nav-tabs flex-column" role='tablist'>
                          <li className="w-100 nav-item">
                            <a className="nav-link d-flex fs-4 text-body rounded-0 p-2 active" id='msg1-tab' data-bs-toggle="tab" role='tab' aria-controls='msg1' aria-selected='true' href="#msg1">
                              <div className="msg-tab-truncate d-flex align-items-center gap-2">
                                <img src={profile} alt="" className='profile-img' />
                                <div className='msg-tab-truncate d-flex flex-column justify-content-center'>
                                  <h5 className='w-100 p-0 m-0 text-truncate'>John Doe</h5>
                                  <p className='w-100 p-0 m-0 fs-5 fw-lighter text-truncate'><i className='bi bi-check2-all'></i> How are you doing? I hope you're doing great</p>
                                </div>
                              </div>
                              <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '5rem'}}>
                                <span className="bg-primary text-light d-flex align-items-center justify-content-center rounded-circle p-1 text-truncate" style={{width: '30px', height: '30px', fontSize: '16px'}}>1</span>
                                <p className='p-0 m-0 text-body fw-lighter' style={{fontSize: '16px'}}>01/07/2024</p>
                              </div>
                            </a>
                          </li>
                          <li className="w-100 nav-item">
                            <a className="nav-link d-flex fs-4 text-body rounded-0 p-2" id='msg2-tab' data-bs-toggle="tab" role='tab' aria-controls='msg2' aria-selected='false' href="#msg2">
                              <div className="msg-tab-truncate d-flex align-items-center gap-2">
                                <img src={profile} alt="" className='profile-img' />
                                <div className='msg-tab-truncate d-flex flex-column justify-content-center'>
                                  <h5 className='w-100 p-0 m-0 text-truncate'>Mike Drake</h5>
                                  <p className='w-100 p-0 m-0 fs-5 fw-lighter text-truncate'><i className='bi bi-check-circle text-primary'></i> Hello!</p>
                                </div>
                              </div>
                              <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '5rem'}}>
                                {/* <span className="bg-primary text-light d-flex align-items-center justify-content-center rounded-circle p-1 text-truncate" style={{width: '30px', height: '30px', fontSize: '16px'}}>1</span> */}
                                <p className='p-0 m-0 text-body fw-lighter' style={{fontSize: '16px'}}>Yesterday</p>
                              </div>
                            </a>
                          </li>
                        </ul>

                        <button className='bi bi-pencil-square btn btn-primary fs-4' style={{position: 'absolute', bottom: '5rem', right: '3rem'}}></button>
                      </div>

                      <div className="tab-pane fade h-100" id="groups" role='tabpanel' aria-labelledby='groups-tab'>
                        groups content
                        
                        <button className='bi bi-building-add btn btn-primary fs-4' style={{position: 'absolute', bottom: '5rem', right: '3rem'}}></button>
                      </div>

                      <div className="tab-pane fade h-100" id="calls" role='tabpanel' aria-labelledby='calls-tab'>
                        calls content
                        
                        <button className='bi bi-telephone-plus btn btn-primary fs-4' style={{position: 'absolute', bottom: '5rem', right: '3rem'}}></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-md-7 d-none d-md-block p-0 vh-100 overflow-hidden z-3">
                {/* Tab panes */}
                <div className="tab-content h-100">
                  {/* Users messages */}
                  <div className="tab-pane fade show active" id="msg1" role='tabpanel' aria-labelledby='msg1-tab'>
                    {/* User */}
                    <div className="w-100 d-flex justify-content-between p-2 border-bottom" style={{height: '5rem'}}>
                      <div className="d-flex align-items-center">
                        <button className='bi bi-arrow-left-short btn d-block d-md-none fs-4 p-0 px-1'></button>
                        <img src={profile} alt="" className='profile-img mx-2' />
                        <div className='d-flex flex-column'>
                          <h5 className='p-0 m-0'>John Doe</h5>
                          <p className='p-0 m-0'>Online</p>
                        </div>
                      </div>                      
                      <div className="d-flex align-items-center gap-2">
                        <button className="bi bi-telephone btn fs-4 p-0 px-1"></button>
                        <button className="bi bi-camera-video btn fs-4 p-0 px-1"></button>
                        <button className="bi bi-three-dots-vertical btn fs-4 p-0 px-1"></button>
                      </div>
                    </div>

                    
                    {/* Chat body */}
                    <div className="chat-body overflow-auto">
                      <div className="text-center m-4">
                        <Link to='#' className='text-decoration-none text-body bg-body-secondary p-1 px-2 rounded h5'>View profile</Link>
                      </div>
                      <h4>Chats</h4>

                      
                    </div>


                    {/* Type message */}
                    <div className="d-flex align-items-center gap-2 p-1 border-top" style={{height: '4rem'}}>
                      <button className='bi bi-emoji-smile btn fs-4 p-0 px-1'></button>
                      <button className='bi bi-paperclip btn fs-4 p-0 px-1'></button>
                      <form method="post" className="flex-grow-1 d-flex align-items-center gap-2">
                          <textarea placeholder="Type your message..." id="textMsg" rows="1" className="w-100 p-2 fs-5 border rounded" value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)} style={{resize: 'none'}}></textarea>
                          {textAreaValue.length > 0 && <button type="submit" className="bi bi-send btn fs-4 p-0 px-1"></button>}
                      </form>
                      {!textAreaValue.length > 0 && <button className='bi bi-mic btn fs-4 p-0 px-1'></button>}
                    </div>
                  </div>


                  <div className="tab-pane fade" id="msg2" role='tabpanel' aria-labelledby='msg2-tab'>
                    {/* User */}
                    <div className="w-100 d-flex justify-content-between p-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <button className='bi bi-arrow-left-short d-block d-sm-none btn fs-4 p-0 px-1'></button>
                        <img src={profile} alt="" className='profile-img mx-2' />
                        <div className='d-flex flex-column'>
                          <h5 className='p-0 m-0'>Mike Drake</h5>
                          <p className='p-0 m-0'>Offline</p>
                        </div>
                      </div>                      
                      <div className="d-flex align-items-center gap-2">
                        <button className="bi bi-telephone btn fs-4 p-0 px-1"></button>
                        <button className="bi bi-camera-video btn fs-4 p-0 px-1"></button>
                        <button className="bi bi-three-dots-vertical btn fs-4 p-0 px-1"></button>
                      </div>
                    </div>

                    
                    
                    {/* Chat body */}
                    <div className="chat-body overflow-auto">
                      <h4>Chats</h4>
                    </div>



                    {/* Type message */}
                    <div className="d-flex align-items-center gap-2 p-1 border-top" style={{height: '4rem'}}>
                      <button className='bi bi-emoji-smile btn fs-4 p-0 px-1'></button>
                      <button className='bi bi-paperclip btn fs-4 p-0 px-1'></button>
                      <form method="post" className="flex-grow-1 d-flex align-items-center gap-2">
                          <textarea placeholder="Type your message..." id="textMsg" rows="1" className="w-100 p-2 fs-5 border rounded" value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)} style={{resize: 'none'}}></textarea>
                          {textAreaValue.length > 0 && <button type="submit" className="bi bi-send btn fs-4 p-0 px-1"></button>}
                      </form>
                      {!textAreaValue.length > 0 && <button className='bi bi-mic btn fs-4 p-0 px-1'></button>}
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Messages;
