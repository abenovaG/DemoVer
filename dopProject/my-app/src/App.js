import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import InfoExercise from "./Pages/InfoExercise/InfoExercise";



function App() {
  return (
    <div className="wrapper">
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/InfoExercise/:id" element={<InfoExercise />}/>
        </Routes>
    </div>
  );
}

export default App;
