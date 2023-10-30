import CoffeeCard from "./CoffeeCard";
import "./coffeeList.css";

export default function CoffeeList({ coffees }) {
  if (!coffees) return null; // blank if no coffees

  return <main className="coffee-list">
    {coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}/>)}
    </main>
}
