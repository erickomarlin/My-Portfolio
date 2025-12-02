import { useState, type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";

interface EmailToggleProps {}

const EmailToggle: FC<EmailToggleProps> = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDisplay = () => {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  };

  const icon = isDisplayed ? faTimes : faEnvelope;
  const showHideEmail = isDisplayed ? "" : "Email";

  return (
    <div>
      <button
        onClick={toggleDisplay}
        style={{
          color: "inherit",
          cursor: "pointer",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px auto",
          background: "inherit",
          transform: "scale(1.3)",
          fontFamily: "inherit",
        }}
        aria-expanded={isDisplayed}
        aria-controls="email-info"
      >
        <FontAwesomeIcon
          icon={icon}
          style={{
            marginTop: "-13px",
          }}
        />
        {showHideEmail}
      </button>

      {isDisplayed && (
        <div
          id="email-info"
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            backgroundColor: "inherit",
            marginTop: "-38px",
          }}
        >
          <p>
            <a href="mailto:erickomarlin@gmail.com">erickomarlin@gmail.com</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailToggle;
