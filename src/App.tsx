import { useState } from "react";
import "./App.css";

type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <h1>{children}</h1>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Title>
        <span>
          Hello <b>World</b>
        </span>
      </Title>
    </div>
  );
}

export default App;
