import React from 'react'
import './TrainerChat.css'
import TrainerChatArea from './TrainerChatArea'
function TrainerChat() {
    return (
        <div className='trainer-chat' >
            <div class="app">
                {/* <div class="header">
                    <div class="logo">
                      
                    </div>
                    <div class="search-bar">
                        <input type="text" placeholder="Search..." />
                    </div>
                    
                </div> */}
                <div class="wrapper">
                    <div class="conversation-area">
                    <div class="msg active">
                            <div class="msg-profile group">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                                    <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
                                    <path d="M22 8.5l-10 7-10-7" />
                                    <path d="M2 15.5l10-7 10 7M12 2v6.5" />
                                </svg>
                            </div>
                            <div class="msg-detail">
                                <div class="msg-username">CodePen Group</div>
                                <div class="msg-content">
                                    <span class="msg-message">Aysenur: I love CSS</span>
                                    <span class="msg-date">28m</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg online">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Madison Jones</div>
                                <div class="msg-content">
                                    <span class="msg-message">What time was our meet</span>
                                    <span class="msg-date">20m</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Miguel Cohen</div>
                                <div class="msg-content">
                                    <span class="msg-message">Adaptogen taiyaki austin jean shorts brunch</span>
                                    <span class="msg-date">20m</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="msg online">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Lea Debere</div>
                                <div class="msg-content">
                                    <span class="msg-message">Shoreditch iPhone jianbing</span>
                                    <span class="msg-date">45m</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg online">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29+%281%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Jordan Smith</div>
                                <div class="msg-content">
                                    <span class="msg-message">Snackwave craft beer raclette, beard kombucha </span>
                                    <span class="msg-date">2h</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Jared Jackson</div>
                                <div class="msg-content">
                                    <span class="msg-message">Tattooed brooklyn typewriter gastropub</span>
                                    <span class="msg-date">18m</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg online">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Henry Clark</div>
                                <div class="msg-content">
                                    <span class="msg-message">Ethical typewriter williamsburg lo-fi street art</span>
                                    <span class="msg-date">2h</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/qs6F3dgm.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Jason Mraz</div>
                                <div class="msg-content">
                                    <span class="msg-message">I'm lucky I'm in love with my best friend</span>
                                    <span class="msg-date">4h</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%288%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Chiwa Lauren</div>
                                <div class="msg-content">
                                    <span class="msg-message">Pabst af 3 wolf moon</span>
                                    <span class="msg-date">28m</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%289%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Caroline Orange</div>
                                <div class="msg-content">
                                    <span class="msg-message">Bespoke aesthetic lyft woke cornhole</span>
                                    <span class="msg-date">35m</span>
                                </div>
                            </div>
                        </div>
                        <div class="msg">
                            <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%286%29.png" alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">Lina Ashma</div>
                                <div class="msg-content">
                                    <span class="msg-message">Migas food truck crucifix vexi</span>
                                    <span class="msg-date">42m</span>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                   
                    <TrainerChatArea/>
                </div>
            </div>
        </div>
    )
}

export default TrainerChat