export const FlashDart = () => {
  return (
    <div className="flash-container">
      <svg
        id="circle-pink-outer"
        width="240"
        height="240"
        className="pink-outer circle"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="backPink"
          cx="120"
          cy="120"
          r="90"
          stroke="#E4B2EB"
          strokeWidth="40"
          strokeDasharray={566}
        />
      </svg>
      <svg
        id="circle-violet-center"
        width="160"
        height="160"
        fill="none"
        className="violet-center circle"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="centerViolet"
          cx="80"
          cy="80"
          r="50"
          stroke="#776FED"
          // stroke="red"
          strokeWidth="30"
          strokeDasharray={314}
        />
      </svg>
      <svg
        className="pink-inner circle"
        id="circle-pink-inner"
        width="80"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="topPink"
          cx="40"
          cy="40"
          r="15"
          stroke="#E4B2EB"
          strokeWidth="30"
          strokeDasharray={95}
        />
      </svg>

      <svg
        width="138"
        height="147"
        viewBox="0 0 138 147"
        fill="none"
        className="flash"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="flash"
          d="M74.4813 69.5819H134.333L27.4876 142.933L63.8811 84.1472L64.8555 82.5731H63.0043H2.40703L55.3284 1.1562H117.283L73.618 67.9867L72.5758 69.5819H74.4813Z"
          fill="#F6E393"
          stroke="#fff"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};
