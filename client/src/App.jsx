import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'

const App = () => {
  const location = useLocation()
  const isOwnerPath = location.pathname.startsWith("/owner")

  // State to control HotelReg modal visibility
  const [showHotelReg, setShowHotelReg] = useState(false)

  return (
    <div>
      {!isOwnerPath && <Navbar />}


      {showHotelReg && <HotelReg onClose={() => setShowHotelReg(false)} />}

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  )
}

export default App
