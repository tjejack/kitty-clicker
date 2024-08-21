import catStandard from "../kitty-clicker-assets/cat-head-standard.png";
import catHappy from "../kitty-clicker-assets/cat-head-happy.png"
import { useState } from "react";

function HomePage() {
  const [catState, setCatState] = useState(catStandard);
  const handlePress = () => {
    setCatState(catHappy)
  }
  const handleRelease = () => {
    setCatState(catStandard)
  }
  return (
    <div>
      <p>This is the Home Page</p>
      <button onPointerDown={handlePress} onKeyDown={handlePress} onPointerUp={handleRelease} onKeyUp={handleRelease}>
        <img src={catState} alt="Ginger cat head in pixel style" />
      </button>
    </div>
  );
}

export default HomePage;
