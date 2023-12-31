import React, {useState, useEffect} from "react"
import "../../style/clock.css"


const Clock = () => {

    const [days, setDays]=useState()
    const [hours, setHours]=useState()
    const [Minutes, setMinutes]= useState()
    const [seconds, setSeconds]=useState()

    let interval; 
    const countDown = ()=>{
        const destination = new Date ('May 29, 2024').getTime()
        interval = setInterval(()=>{
            const now =new Date().getTime()
            const different= destination - now
            const days= Math.floor(different / (1000 * 60 *60 *24))

            const hours = Math.floor(different % (1000 * 60 * 60 *24)/(1000 * 60 *60))

            const Minutes = Math.floor(different % (1000 * 60 * 60)/
            (1000 * 60 ))
            const second= Math.floor(different % (1000 * 60 )/
            (1000))

            if(destination <0 ) clearInterval(interval.current)
            else{
                setDays( days)
                setHours(hours)
                setMinutes(Minutes)
                setSeconds(second)
            }
        })
    };
    useEffect(()=>{
        countDown()
    })
  return (
    <div  className='clock__wrapper d-flex align-items-center gap-3'>
        <div className='clock__data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2' >{days}</h1>
                <h1 className='text-white fs-3' >Days</h1>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className='clock__data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2' >{hours}</h1>
                <h1 className='text-white fs-3' >Hours</h1>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className='clock__data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2' >{Minutes}</h1>
                <h1 className='text-white fs-3' >Minutes</h1>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className='clock__data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2' >{seconds}</h1>
                <h1 className='text-white fs-3' >Seconds</h1>
            </div>
           
        </div>
    </div>
  )
}

export default Clock