import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div className=" w-full h-full bg-[#153448]">
      <Outlet />
    </div>
  );
}

export default MainHeader