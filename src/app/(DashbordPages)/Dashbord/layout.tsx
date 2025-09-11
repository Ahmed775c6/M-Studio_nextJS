import React from 'react'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <h1>DH navbar</h1>
        {children}
    </div>
  )
}

export default Layout