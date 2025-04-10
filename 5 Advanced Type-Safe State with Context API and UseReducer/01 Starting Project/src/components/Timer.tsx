import Container from './UI/Container.tsx';
import { Timer as TimeProps } from '../store/timers-context.tsx';

export default function Timer({ name, duration }: TimeProps) {
   return (
      <Container as="article">
         <h2>{name}</h2>
         <p>{duration}</p>
      </Container>
   );
}
