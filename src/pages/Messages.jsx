import React from 'react';
import Nav from '../components/Nav';
import profile from '../assets/img/malewatches.jpeg';

function Messages() {
  return (
    <div>
      <div className="container-fluid d-flex p-0">
          {/* <Header /> */}
          <Nav />
          <section className="messages-section p-0 m-0">
            <div className="row m-0">
              <div className="col-md-5 p-0 border-end  overflow-hidden">
                <div className="message-header w-100 border-bottom d-flex justify-content-between p-2">
                  <div className="d-flex align-items-center me-2">
                    <img src={profile} alt="profile" className="profile-img me-1" />
                  </div>

                  <div className="d-flex align-items-center gap-1">
                    <button className="bi bi-search btn btn-light fs-4"></button>
                    <button className="bi bi-chat-dots btn btn-light fs-4"></button>
                    <button className="bi bi-archive btn btn-light fs-4"></button>
                    <button className="bi bi-three-dots-vertical btn btn-light fs-4"></button>
                  </div>
                </div>

                <div className="message-body overflow-auto">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs nav-justified" role='tablist'>
                    <li className="nav-item">
                      <a className="nav-link fs-4 text-body active" id='chats-tab' data-bs-toggle="tab" role='tab' aria-controls='chats' aria-selected='true' href="#chats">Chats</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4 text-body" id='groups-tab' data-bs-toggle="tab" role='tab' aria-controls='groups' aria-selected='false' href="#groups">Groups</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4 text-body" id='calls-tab' data-bs-toggle="tab" role='tab' aria-controls='calls' aria-selected='false' href="#calls">Calls</a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content h-100">
                    <div className="tab-pane fade h-100 show active" id="chats" role='tabpanel' aria-labelledby='chats-tab'>
                      {/* Nav tabs */}
                      <ul className="nav nav-tabs flex-column" role='tablist'>
                        <li className="nav-item">
                          <a className="nav-link fs-4 text-body active" id='msg1-tab' data-bs-toggle="tab" role='tab' aria-controls='msg1' aria-selected='true' href="#msg1">msg1</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link fs-4 text-body" id='msg2-tab' data-bs-toggle="tab" role='tab' aria-controls='msg2' aria-selected='false' href="#msg2">msg2</a>
                        </li>
                      </ul>

                      <button className='bi bi-pencil-square btn btn-dark fs-4' style={{position: 'absolute', bottom: '12rem', right: '3rem'}}></button>
                    </div>

                    <div className="tab-pane fade h-100" id="groups" role='tabpanel' aria-labelledby='groups-tab'>
                      groups content
                      
                      <button className='bi bi-building-add btn btn-dark fs-4' style={{position: 'absolute', bottom: '12rem', right: '3rem'}}></button>
                    </div>

                    <div className="tab-pane fade h-100" id="calls" role='tabpanel' aria-labelledby='calls-tab'>
                      calls content
                      
                      <button className='bi bi-telephone-plus btn btn-dark fs-4' style={{position: 'absolute', bottom: '12rem', right: '3rem'}}></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-7 d-none d-md-block p-0 vh-100 overflow-hidden">
                {/* Tab panes */}
                <div className="tab-content h-100">
                  <div className="tab-pane fade show active" id="msg1" role='tabpanel' aria-labelledby='msg1-tab'>

                  <div className="message-header w-100 d-flex justify-content-between p-2 border-bottom">
                    <div className="d-flex align-items-center">
                      <button className='bi bi-arrow-left-short btn btn-light fs-4'></button>
                      <img src={profile} alt="" className='profile-img mx-2' />
                      <div className='d-flex flex-column'>
                        <h5 className='p-0 m-0'>John Doe</h5>
                        <p className='p-0 m-0'>Online</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center gap-1">
                      <button className="bi bi-telephone btn btn-light fs-4"></button>
                      <button className="bi bi-camera-video btn btn-light fs-4"></button>
                      <button className="bi bi-three-dots-vertical btn btn-light fs-4"></button>
                    </div>
                  </div>
                  
                  {/* Message body */}
                  <div className="message-body overflow-auto">
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    Yes
                    <br />
                    Hello
                    <br />
                    Hello
                    <br />
                    hi
                    <br />
                  </div>
                </div>

                  <div className="tab-pane fade" id="msg2" role='tabpanel' aria-labelledby='msg2-tab'>
                    
                  <div className="w-100 d-flex justify-content-between p-2 border-bottom">
                    <div className="d-flex align-items-center">
                      <button className='bi bi-arrow-left-short btn btn-light fs-4'></button>
                      <img src={profile} alt="" className='profile-img mx-2' />
                      <div className='d-flex flex-column'>
                        <h5 className='p-0 m-0'>Mike Drake</h5>
                        <p className='p-0 m-0'>Online</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center gap-1">
                      <button className="bi bi-telephone btn btn-light fs-4"></button>
                      <button className="bi bi-camera-video btn btn-light fs-4"></button>
                      <button className="bi bi-three-dots-vertical btn btn-light fs-4"></button>
                    </div>
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
