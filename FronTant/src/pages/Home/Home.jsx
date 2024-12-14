import React ,{useState} from 'react'
import Header from '../../components/Header'
import Explore from '../../components/Explore'
import Foodisplay from '../../components/Foodisplay'

const Home = () => {

  const [category, setCategory] = useState('all')
  return (
    <div>
      <Header/>
      <Explore category={category} setCategory={setCategory}/>
      <Foodisplay category={category}/>
    </div>
  )
}

export default Home