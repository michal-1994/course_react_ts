/** @format */

import "./App.css";
import CourseGoal, { type CourseGoalProps } from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalProps = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn React + TS description",
      };
      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            key={goal.id}
            title={goal.title}
            description={goal.description}
          />
        </li>
      ))}
    </main>
  );
}

export default App;
