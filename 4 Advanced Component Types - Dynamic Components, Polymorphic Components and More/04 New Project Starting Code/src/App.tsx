import { useRef } from 'react';
import Input from './components/Input';

function App() {
   const input = useRef(null);
   return (
      <main>
         <Input label="test" id="test" ref={input} />
      </main>
   );
}

export default App;
