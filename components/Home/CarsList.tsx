import React, { useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../CarBooking/BookingModal'

const CarsList = (carListArr: any) => {
  const [selectedCar, setSelectedCar] = useState([]);
  return (
    <div 
    className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {carListArr.carlist.map((car:any, index: number) => (
        <div key={index} onClick={()=>{(window as any).my_modal_4.showModal();
          setSelectedCar(car)}}>
            <CarCard car={car} />
        </div>
    ))}
      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar}/>
      </dialog>
    </div>
  )
}

export default CarsList