const Cards = ({Name, Description }) => {
  return (
    <>
      <div className="py-8 px-8 max-w-sm mx-auto bg-black rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6" style={{border:'2px solid #31363F'}}>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-white font-semibold">
              {Name}
            </p>
            <p className="text-slate-500 font-medium">
              {Description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards