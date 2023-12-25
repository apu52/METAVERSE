import React from "react";
import Typed from "typed.js";

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App1">
      <span ref={el} />
    </div>
  );
}
export default MyComponent;
