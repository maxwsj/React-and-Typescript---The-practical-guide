import CourseGoal from './CourseGoal';
import { CourseGoal as TCourseGoal } from '../App';

interface CourseGoalListProps {
   goals: TCourseGoal[];
   onDelete: (id: number) => void;
}

export default function CourseGoalList({
   goals,
   onDelete,
}: CourseGoalListProps) {
   return (
      <ul>
         {goals.map((goal) => (
            <li key={goal.id}>
               <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
                  <p>{goal.description}</p>
               </CourseGoal>
            </li>
         ))}
      </ul>
   );
}
