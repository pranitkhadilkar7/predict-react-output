import * as React from 'react';
import './style.css';
import { ExampleComponent } from './ExampleComponent';
import { ParentComponent } from './Example2';
import { Example3 } from './Example3';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ExampleComponent />
      {/* <ParentComponent /> */}
      {/* <Example3 /> */}
    </div>
  );
}
