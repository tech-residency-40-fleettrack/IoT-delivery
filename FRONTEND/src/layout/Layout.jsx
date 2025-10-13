import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../navbar/components/Navbar";
import backgroundURL from '/result_splash_background.png?url'

function Layout(){
  const heightRef = useRef(null)
  const [navbarHeight, setNavbarHeight] = useState(0)
  
  useEffect(() => {
    if (heightRef.current) {
      setNavbarHeight(heightRef.currentgetBoundingClientRect().height)
    }
  }, []);


  return (
    <>
      <main
        id="superContainer"
        style={{
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${backgroundURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <NavBar ref={heightRef}/>
        <div id="initialPadding" style={{paddingTop: '150px' }} />
        <Outlet />
      </main>
    </>
  )
}

export default Layout;