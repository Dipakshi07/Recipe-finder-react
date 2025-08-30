import MainPage from "./components/MainPage"
import {Routes,Route} from "react-router-dom"
import MealInfo from "./components/MealInfo";


function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<MainPage/>}/>
         <Route path="/:mealId" element={<MealInfo/>}/>
      </Routes>
    </>
  );
}

export default App
