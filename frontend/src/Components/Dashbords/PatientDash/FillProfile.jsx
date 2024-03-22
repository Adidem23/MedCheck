import axios from 'axios'
import { useState, useEffect } from 'react';
import PatientProfile from './Pages/PatientProfile';

const FillProfile = ({ UserEmail }) => {

  const [FilledProfile, setFilledProfile] = useState(false);
  const [BloodGroup, setBloodGroup] = useState("");
  const [Allegery, setAllegery] = useState("");
  const [Weight, setWeight] = useState(0);
  const [Disease, setDisease] = useState("");
  const [Age, setAge] = useState(0);

  const CheckFilledProfile = async (UserEmail) => {
    await axios.post("http://localhost:9000/CheckPorfile", { UserEmail: UserEmail }).then((res) => {
      setFilledProfile(res.data);
    }).catch((err) => {
      console.log(`${err} Occured`)
    })
  }

  useEffect(() => {
    CheckFilledProfile(UserEmail)
  }, []);

  const UpdateProfile = async (e) => {
    e.preventDefault();

    alert('Patient updated Profile');

    const UpdateData = {
      BloodGroup: BloodGroup,
      Allegery: Allegery,
      Weight: Weight,
      Disease: Disease,
      Age: Age
    }

    await axios.post("http://localhost:9000/UpdatePatientProfile", { UserEmail: UserEmail, UpdateData: UpdateData }, { withCredentials: true }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(`${err} is Occured`);
    })


  }

  return (
    <>

      {!FilledProfile ? <><div style={{ width: 'fit-content', margin: 'auto' }}>

        <h1 style={{ width: 'fit-content', margin: 'auto', fontSize: '40px' }}>Fill Profile</h1>

        <br />

        <div style={{ width: 'fit-content', margin: 'auto', marginTop: "-70px" }}>

          <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Patient Profile</h2>

              <form className="flex flex-wrap">
                <input
                  type="text"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                  placeholder="Blood Group" onChange={(e) => { setBloodGroup(e.target.value) }}
                />
                <input
                  type="text"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                  placeholder="Allegery" onChange={(e) => { setAllegery(e.target.value) }}
                />
                <input
                  type="number"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                  placeholder="Weight(in Kgs)" onChange={(e) => { setWeight(e.target.value) }}
                />
                <input
                  type="text"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                  placeholder="Disease" onChange={(e) => { setDisease(e.target.value) }}
                />

                <input
                  type="number"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                  placeholder="Age" onChange={(e) => { setAge(e.target.value) }}
                />

                <button
                  onClick={UpdateProfile}
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>


        </div >


      </div></> : <><PatientProfile Email={UserEmail}/></>}

    </>
  )
}

export default FillProfile