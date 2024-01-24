import React, {  ReactNode  } from 'react'
import ResponsiveAppBar from '../MaterialUI/ResponsiveAppBar';


const LayoutComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
    <>
    <ResponsiveAppBar />
    {children}
    </>
  )
}

export default LayoutComponent