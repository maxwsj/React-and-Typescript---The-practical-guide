import { type PropsWithChildren, type ReactNode } from 'react';

// interface CourseGoalProp {
//    title: string;
//    children: ReactNode;
//    //    onDelete: () => void;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
   return (
      <article>
         <div>
            <h2>{title}</h2>
            {children}
         </div>
         <button>Delete</button>
      </article>
   );
}
