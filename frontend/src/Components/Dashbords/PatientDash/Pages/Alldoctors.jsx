import AllDoctorsCard from "./AllDoctorsCard"

const Alldoctors = () => {
  return (
    <>
      <div style={{ width: 'fit-content', margin: 'auto' }}>

        <h1 style={{ width: 'fit-content', margin: 'auto', fontSize: '40px' }}>All Doctors</h1>

        <br />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>

          <AllDoctorsCard />

        </div>


      </div>
    </>
  )
}

export default Alldoctors