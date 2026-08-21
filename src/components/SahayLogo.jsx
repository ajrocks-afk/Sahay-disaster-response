function SahayLogo({ variant = "full", className = "" }) {
  const full = variant === "full";
  const footer = className.includes("footer-logo-svg");
  return (
    <svg
      className={`sahay-logo ${className}`}
      viewBox={full ? "0 0 720 180" : "0 0 180 180"}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SAHAY - Disaster Response & Shelter Safety"
    >
      {/* =========================================
          LOGO SYMBOL
      ========================================= */}

      {/* House roof */}
      <path
        d="M20 62 L90 15 L160 62"
        fill="none"
        stroke="#173752"
        strokeWidth="13"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Small roof support */}
      <path
        d="M42 54 V72"
        fill="none"
        stroke="#173752"
        strokeWidth="11"
      />

      {/* Shield outline */}
      <path
        d="M90 40
           L145 73
           V112
           C145 139 126 158 90 174
           C54 158 35 139 35 112
           V73
           Z"
        fill="none"
        stroke="#25A88D"
        strokeWidth="10"
        strokeLinejoin="round"
      />

      {/* =========================================
          CENTRAL S
      ========================================= */}

      <path
        d="
          M119 74
          C112 61 101 54 88 54
          C73 54 63 62 63 73
          C63 84 72 89 88 94
          C105 99 114 106 114 119
          C114 133 102 143 87 143
          C72 143 61 136 54 124
        "
        fill="none"
        stroke="#173752"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* =========================================
          GREEN CIRCULAR RESPONSE ARROWS
      ========================================= */}

      {/* Left upward arrow */}
      <path
        d="
          M48 117
          C37 107 31 94 31 80
          C31 69 34 60 40 52
        "
        fill="none"
        stroke="#25A88D"
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M28 59 L40 42 L52 59"
        fill="none"
        stroke="#25A88D"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right upward arrow */}
      <path
        d="
          M132 78
          C139 89 141 101 139 113
          C137 127 130 138 120 146
        "
        fill="none"
        stroke="#25A88D"
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M126 137 L119 154 L136 150"
        fill="none"
        stroke="#25A88D"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* =========================================
          WORDMARK
      ========================================= */}

      {full && (
        <>
          <text
            x="205"
            y="105"
            fill={footer ? "#FFFFFF" : "#173752"}
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="76"
            fontWeight="800"
            letterSpacing="1"
          >
            SAHAY
          </text>

          <text
            x="208"
            y="137"
            fill={footer ? "#7DD3C7" : "#1C7791"}
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="17"
            fontWeight="700"
            letterSpacing="0.4"
          >
            DISASTER RESPONSE &amp; SHELTER SAFETY
          </text>
        </>
      )}
    </svg>
  );
}

export default SahayLogo;