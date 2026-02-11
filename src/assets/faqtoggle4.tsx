import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FaqToggleProps {}

const FaqToggle4: FC<FaqToggleProps> = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDisplay = () => {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  };

  const icon = isDisplayed ? faMinus : faPlus;
  const showHideAnswer4 = isDisplayed ? "I have big interest in tech industry especially web programming" : "";

  return (
    <div>
      <div
        onClick={toggleDisplay}
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={icon} />
        <p
          style={{
            marginLeft: "10px",
            marginTop: "20px",
            marginBlock: "5px",
            paddingBottom: "15px",
          }}
        >
          Why do you switch career?
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
          {showHideAnswer4}
        </div>
      </div>
    </div>
  );
};

export default FaqToggle4;
