import React from 'react'
import { Navbar } from '../Components/Navbar'
import Mainnav from '../Components/Mainnav'
import { Shoecart } from '../Components/Shoecart'
import Footlockersec from '../Components/Footlockersec'
import { Tabsdec } from '../Components/Tabsdec'
import Relatedsec from '../Components/Relatedsec'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Mainnav />
            <Shoecart />
            <Footlockersec />
            <Tabsdec />
            <Relatedsec />
            <Footer />
        </div>
    )
}

export default Home