import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FaqToggleProps {}

const FaqToggle5: FC<FaqToggleProps> = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDisplay = () => {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  };

  const icon = isDisplayed ? faMinus : faPlus;
  const showHideAnswer5 = isDisplayed ? "I specialize in developing interactive and responsive web designs." : "";

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
          What contribution do you think you can provide?
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
          {showHideAnswer5}
        </div>
      </div>
    </div>
  );
};

export default FaqToggle5;
