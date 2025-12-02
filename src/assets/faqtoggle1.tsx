import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FaqToggleProps {}

const FaqToggle1: FC<FaqToggleProps> = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDisplay = () => {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  };

  const icon = isDisplayed ? faMinus : faPlus;
  const showHideAnswer1 = isDisplayed ? "I use HTML, CSS, Javascript, React, and Vite" : "";

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={icon} onClick={toggleDisplay} />
        <p
          style={{
            marginLeft: "10px",
            marginTop: "20px",
            marginBlock: "5px",
            paddingBottom: "15px",
            textAlign: "left",
          }}
        >
          What tech stack are you using for this website?
        </p>
      </div>
      <div
        style={{
          marginTop: "-15px",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            textAlign: "left",
            marginLeft: "80px",
            fontStyle: "italic",
          }}
        >
          {showHideAnswer1}
        </div>
      </div>
    </div>
  );
};

export default FaqToggle1;
