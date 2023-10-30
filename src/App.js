import { useState} from 'react'
import Hero from './components/Hero'
import AddCoffee from './components/addCoffee'
import CoffeeList from './components/CoffeeList'
import './App.css'

export default function App() {
  const [coffees, setCoffees] =useState()
return (
 <>
 <Hero/>
 <AddCoffee setCoffees={setCoffees} />
 <CoffeeList coffees={coffees} />
 </>
  )
}


