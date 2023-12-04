import React from "react"

const Tes = () => {
    return (
      <div className="p-16">
        <div className="text-center text-lg font-bold">Untuk mengetahui kondisi stress, silahkan ikuti tes!!</div>
        <div className="flex justify-center">
        <Link to="/stressTest">
          <button className="bg-[#cdcec8] py-2 px-5 rounded-lg mt-4 text-lg font-bold hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-brightGreen hover:text-white transition-all">
          Tes Depresi
        </button>
      </Link>
        </div>
      </div>
    )
  }
  
  export default Tes