import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/ExploreMenu/Exploremenu'
import Fooddisplay from '../../component/Fooddisplay/Fooddisplay'
import Appdow from '../../component/Appdownload/Appdow'
const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <Fooddisplay category = {category}/>
        <Appdow/>
    </div>
  )
}

export default Home
