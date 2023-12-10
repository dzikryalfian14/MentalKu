import React, { useEffect, useState } from 'react';

const StressProgressBar = ({ totalScore }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let percentage = 0;

    // Logika penilaian depresi
    if (totalScore >= 0 && totalScore <= 14) {
      percentage = 20;
    } else if (totalScore >= 10 && totalScore <= 18) {
      percentage = 40;
    } else if (totalScore >= 14 && totalScore <= 25) {
      percentage = 60;
    } else if (totalScore >= 21 && totalScore <= 33) {
      percentage = 80;
    } else if (totalScore > 34) {
      percentage = 100;
    }

    setWidth(percentage);
  }, [totalScore]);

  return (
    <div style={{
        border: '1px solid #ccc',
        width: '50%',
        height: '30px',
        marginTop: '50px',
        marginLeft: '25%',
        borderRadius: '15px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div
        style={{
          backgroundColor: 'grey',
          height: '100%',
          width: `${width}%`,
          transition: 'width 0.5s ease-in-out',
          borderRadius: '15px',
          textAlign: 'center',
          position: 'absolute',
          top: '0',
          left: '0',
          color: 'white',
          lineHeight: '30px'
        }}
      >
        {`${width}%`}
      </div>
    </div>
  );
};

export default StressProgressBar;
