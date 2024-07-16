/** @format */

import { ReactNode } from "react";
import CourseGoal, { type CourseGoalProps } from "./CourseGoal";
import InfoBox from "./InfoBox";

export interface CourseGoalListProps {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning'>
        You're collecting a log of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
};

export default CourseGoalList;
