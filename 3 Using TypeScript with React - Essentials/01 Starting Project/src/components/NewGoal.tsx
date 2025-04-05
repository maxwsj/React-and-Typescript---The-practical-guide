import { FormEvent, useRef } from 'react';

type NewGoalProps = {
   onAddGoal: (title: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
   const goalInputRef = useRef<HTMLInputElement>(null);
   const summaryInputRef = useRef<HTMLInputElement>(null);

   function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const enteredGoal = goalInputRef.current!.value;
      const enteredSummary = summaryInputRef.current!.value;

      // Optional: you can add validation here if needed
      if (!enteredGoal.trim() || !enteredSummary.trim()) return;

      onAddGoal(enteredGoal, enteredSummary);

      // Clear inputs after submission
      goalInputRef.current!.value = '';
      summaryInputRef.current!.value = '';
   }

   return (
      <form onSubmit={handleSubmit}>
         <p>
            <label htmlFor="goal">Your goal</label>
            <input type="text" id="goal" ref={goalInputRef} />
         </p>
         <p>
            <label htmlFor="summary">Short summary</label>
            <input type="text" id="summary" ref={summaryInputRef} />
         </p>
         <p>
            <button type="submit">Add Goal</button>
         </p>
      </form>
   );
}
