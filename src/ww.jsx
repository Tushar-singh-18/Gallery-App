import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [User, setUser] = useState([])
  const [index, setindex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUser(response.data)
  }

  useEffect(() => {
    getdata()
  }, [index])

  let printuser = <h3 className='text-lg text-gray-500 top-1/2 left-1/2 absolute -translate-x-1/2
  -translate-y-1/2'>Loading</h3>

  if (User.length > 0) {
    printuser = User.map((elem, idx) => {
      return <div>
        <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h3 className='font-bold text-lg'>{elem.author}</h3>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto text-white h-screen p-4'>

      <div className='flex h-[80%] flex-wrap gap-4'>
        {printuser}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button onClick={() => {
          if (index > 1) {
            { printuser }
            setindex(index - 1)
            setUser([])
          }
        }} className='bg-amber-500 text-black rounded px-3 py-2 font-semibold cursor-pointer active:scale-95'>Prev</button>
        <button onClick={() => {
          { printuser }
          setindex(index + 1)
          setUser([])
        }} className='bg-amber-500 text-black rounded px-3 py-2 font-semibold cursor-pointer active:scale-95'>Next</button>
      </div>

    </div>
  )
}

export default App;