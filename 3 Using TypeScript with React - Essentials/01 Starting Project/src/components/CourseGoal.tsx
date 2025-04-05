import { type PropsWithChildren, type ReactNode } from 'react';

// interface CourseGoalProp {
//    title: string;
//    children: ReactNode;
//    //    onDelete: () => void;
// }

type CourseGoalProps = PropsWithChildren<{
   id: number;
   title: string;
   onDelete: (id: number) => void;
}>;

export default function CourseGoal({
   id,
   title,
   children,
   onDelete,
}: CourseGoalProps) {
   return (
      <article>
         <div>
            <h2>{title}</h2>
            {children}
         </div>
         <button onClick={() => onDelete(id)}>Delete</button>
      </article>
   );
}
