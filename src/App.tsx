/** @format */

import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal
        title='Learn React + TS'
        description='Learn it from the ground up'
      />
      <CourseGoal
        title='Learn React + TS'
        description='Learn it from the ground up'
      />
    </main>
  );
}

export default App;
