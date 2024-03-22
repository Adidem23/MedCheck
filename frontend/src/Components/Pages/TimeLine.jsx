import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import N1 from '../Pages/Numbers/N1';
import N2 from '../Pages/Numbers/N2';
import N3 from '../Pages/Numbers/N3';
import N4 from '../Pages/Numbers/N4';
import N5 from '../Pages/Numbers/N5';
import Register from '../Images/Use.png';
import Verification from '../Images/Verification.png';
import Drug from '../Images/Drug.png';
import Conflict from '../Images/Conflict.png';
import pre from '../Images/pre.png'



const Timeline = () => {

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={<N1 />}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', alignItems: 'center' }}
            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={Register} alt="" style={{ width: '150px', height: '100px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">User Registration</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Doctors/Patients</h4>
                        <p>
                            User has to Authenticate its account and Select Role of Doctor or Patient
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={<N2 />}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={Verification} alt="" style={{ width: '150px', height: '80px'}} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Profile</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Patient</h4>
                        <p>
                            Patient Will Fill his profile and it Will be Viewed by Doctors
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={<N3 />}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={Drug} alt="" style={{ width: '150px', height: '80px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Medicine Prescription</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Doctor</h4>
                        <p>
                           Doctor Will Review Profile of Patients and analyzes his/her medical data 
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={<N4 />}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={Conflict} alt="" style={{ width: '150px', height: '80px' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Conflict Detection</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Doctors</h4>
                        <p>
                           Doctors will came to know which Drugs have no comapatiblity with our system 
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                icon={<N5 />}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}

            >
                <div className='gradientDiv' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={pre} alt="" style={{ width: '80px', height: '80px',borderRadius:'50%' }} />
                    </div>
                    <div>
                        <h3 className="vertical-timeline-element-title">Precautions</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '5px' }}>Doctors</h4>
                        <p>
                           Precautions to the Diseases will be provided based upon patients 
                        </p>
                    </div>
                </div>
            </VerticalTimelineElement>

        </VerticalTimeline>
    )
}

export default Timeline