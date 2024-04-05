import React, {useState} from 'react'
function Dropdown (props) {
  // const menudata = props.menudata;
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState(false);
  const onToggle = (e)  => {
    setStatus(!status);
  }
  const onSelect = (e) => () => {
    console.log(e)
    setActive(e)
    setStatus(false);
  }
  const types = [
    {id: 0,value: 'all', label: 'All'},
    {id: 1,value: 'dev', label: 'Developer'},
    {id: 2,value: 'singer', label: 'Singer'},
    {id: 3,value: 'student', label: 'Student'},
    {id: 4,value: 'artist', label: 'Artist'},
    {id: 5,value: 'officer', label: 'Officer'}
  ]
  return(
    <>
      <div className='w-full'>
        <div className="flex cursor-pointer" onMouseUp={onToggle}>
          <div className="mr-2 my-auto h-[40px] pt-1 w-full px-6 border-gray-300 border-[1px] rounded-md flex">
            <p className='w-full text-[18px]'>{types[active]["value"]}</p>
            <p className={`pt-1 zmdi ${status? "zmdi-caret-up":"zmdi-caret-down"} `}></p>
          </div>
        </div>
        <div className={`${status ? "" : "hidden"} absolute top-[-${(types.length*40)}px] z-100 w-[150px] bg-white border-[1px] rounded-md transition-all duration-75 border-gray-300 cursor-pointer z-100 shadow-xl z-50`}>
            {types.map((type, index)=> (
                <div key={index} className='flex content-center border-1' onClick={onSelect(type.id)} onMouseUp={onToggle}>
                  <p className='text-black text-[18px] w-full text-left px-6 py-1 hover:bg-gray-600 hover:rounded-sm'>{type.value}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}
export default Dropdown