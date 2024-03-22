import axios from 'axios';
import './PatientProfile.css'
import { useState, useEffect } from 'react';
import lighthouse from '@lighthouse-web3/sdk'




const PatientProfile = ({ Email }) => {

    const [Name, setName] = useState("")
    const [Image, setImage] = useState("")
    const [UserEmail, setUserEmail] = useState("")
    const [Age, setAge] = useState(0);
    const [BloodGroup, setBloodGroup] = useState("")
    const [Weight, setWeight] = useState(0)
    const [IPFSHash, setIPFSHash] = useState("");

    const MakeRequest = async () => {
        await axios.post("http://localhost:9000/PatientPro", { UserEmail: Email }, { withCredentials: true }).then((res) => {
            console.log(res.data);
            setAge(res.data.Age);
            setName(res.data.Name);
            setImage(res.data.ImageURL);
            setUserEmail(res.data.Email);
            setWeight(res.data.Weight);
            setBloodGroup(res.data.BloodGroup);

            const Patient = {
                Name: res.data.Name,
                ImageUrl: res.data.ImageURL,
                Email: res.data.Email,
                Weight: res.data.Weight,
                BloodGroup: res.data.BloodGroup,
                Age: res.data.Age
            }

            const API_KEY = "fdd24c8c.ba817fb14cbc4e35a9744273e20aa5be"

            const UploadDatatoIPFS = async () => {
                const NameofFile = `${res.data.Name}IPFS`;
                const response = await lighthouse.uploadText(JSON.stringify(Patient), API_KEY, NameofFile)
                setIPFSHash(response.data.Hash)
            }
            UploadDatatoIPFS();

        }).catch((err) => {
            console.log(`${err} is Occured`);
        })
    }


    useEffect(() => {
        MakeRequest();
    }, [])

    return (
        <>

            <div style={{ display: 'block', margin: 'auto', width: 'fit-content', marginTop: '30px' }}>
                <h1>Hi!!! {Name}</h1>
                <br />
                <div className="card-container">
                    <img className="round" src={Image} alt="user" style={{ height: '100px', width: '100px', display: 'block', margin: 'auto', width: 'fit-content' }} />
                    <h3>Name : {Name}</h3>
                    <h6>Email : {UserEmail}</h6>
                    <h4>Age : {Age} Years</h4>
                    <div className="skills">
                        <h6>Medical Details</h6>
                        <ul>
                            <li>Weight:{Weight} KG</li>
                            <li>BloodGroup:{BloodGroup}</li>
                            {IPFSHash && <li><a href={`https://ipfs.io/ipfs/${IPFSHash}
`}>IPFS Hash</a></li>}
                        </ul>
                    </div>
                </div>
            </div>

            <div>

            </div>


        </>
    )
}

export default PatientProfile