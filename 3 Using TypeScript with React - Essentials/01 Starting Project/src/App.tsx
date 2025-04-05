import goalsImg from './assets/goals.jpg';

import Header from './components/Header.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

import { useState } from 'react';

export type CourseGoal = {
   title: string;
   summary: string;
   id: number;
};

export default function App() {
   const [goals, setGoals] = useState<CourseGoal[]>([]);

   const handleAddGoal = (title: string, summary: string) => {
      setGoals((prevGoals) => [
         ...prevGoals,
         {
            id: Math.random(), // consider using a better ID in production
            title,
            summary,
         },
      ]);
   };

   function handleDeleteGoal(id: number) {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
   }

   return (
      <main>
         <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
            <h1>Your Course Goals</h1>
         </Header>
         <NewGoal onAddGoal={handleAddGoal} />
         <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
      </main>
   );
}
