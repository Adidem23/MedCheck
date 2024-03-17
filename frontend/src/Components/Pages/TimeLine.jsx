import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import N1 from '../Assests/Assets Components/N1';
// import N2 from '../Assests/Assets Components/N2';
// import N3 from '../Assests/Assets Components/N3';
// import N4 from '../Assests/Assets Components/N4';
// import N5 from '../Assests/Assets Components/N5';
// import N6 from '../Assests/Assets Components/N6';
// import N7 from '../Assests/Assets Components/N7';
// import N8 from '../Assests/Assets Components/N8';
// import Register from '../Assests/register.png'
// import Verify from '../Assests/verified.jpeg'
// import NFT from '../Assests/nft-modified.png'
// import Login from '../Assests/login.png'
// import SwitchUser from '../Assests/switchuser.mp4'
// import Chat from '../Assests/chat.mp4'
// import Announcement from '../Assests/announce.png'
// import Ban from '../Assests/banned.png'

const Timeline = () => {

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={""}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', alignItems: 'center' }}
            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={""} alt="" style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">User Registration</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Student/Faculty</h4>
                        <p>
                            User will have to submit the College ID-Card and email with required details.
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={""}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={""} alt="" style={{ width: '80px', height: '80px'}} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Verification</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Admin</h4>
                        <p>
                            Admin verifies the details and sends a confirmation email along with credentials to the user.
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={""}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={""} alt="" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">NFT Minting</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Admin</h4>
                        <p>
                            NFTs are generated for the data of every registered users
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={""}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={""} alt="" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Login</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Student/Faculty</h4>
                        <p>
                            Users log in to the platform using their verified credentials.
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={""}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={""} alt="" style={{ width: '80px', height: '80px',borderRadius:'50%' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Profile Switching</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Student/Faculty</h4>
                        <p>
                            Users can switch between Anonymous and Private accounts, managing their privacy settings.
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={""}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={""} alt="" style={{ width: '75px', height: '75px',marginRight:'10px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Announcement</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Student/Faculty</h4>
                        <p>
                            Users can create posts, comment, react, and make announcements.
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={""}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={""} alt="" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Group Chats</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Student/Faculty</h4>
                        <p>
                            Users can participate in group chats for collaborative discussions.
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={""}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={""} alt="" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Content Moderation</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Admin</h4>
                        <p>
                            Offensive language or behavior leads to appropriate actions like warnings or bans to maintain a respectful environment.
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline