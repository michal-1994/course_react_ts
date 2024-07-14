/** @format */

import CourseGoal, { type CourseGoalProps } from "./CourseGoal";

export interface CourseGoalListProps {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            key={goal.id}
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
          />
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
