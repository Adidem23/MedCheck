import AllPatientsCard from './AllPatientsCard'

const Allpatients = () => {
  return (
    <>
      <div style={{ width: 'fit-content', margin: 'auto' }}>

        <h1 style={{ width: 'fit-content', margin: 'auto', fontSize: '40px' }}>All Patients</h1>

        <br />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>

          <AllPatientsCard />

        </div>


      </div>
    </>
  )
}

export default Allpatients