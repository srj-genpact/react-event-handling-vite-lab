// Code SubmitButton Component Here

function SubmitButton() {
  // Event handler for when the mouse pointer enters the button area
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  // Event handler for when the mouse pointer leaves the button area
  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    // Render a button with mouse enter and leave events attached
    <button 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;