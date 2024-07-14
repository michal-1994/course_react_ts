/** @format */

import CourseGoal, { type CourseGoalProps } from "./CourseGoal";

export interface CourseGoalListProps {
  goals: CourseGoalProps[];
}

const CourseGoalList = ({ goals }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            key={goal.id}
            title={goal.title}
            description={goal.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
