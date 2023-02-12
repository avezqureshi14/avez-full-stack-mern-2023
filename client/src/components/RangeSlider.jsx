import React, { useState, useEffect } from "react";
const RangeSlider = () => {
  const [value, setValue] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value >= 0 && value < 30) {
      setCurrentText(text1);
    } else if (value >= 30 && value < 60) {
      setCurrentText(text2);
    } else if (value >= 60 && value < 90) {
      setCurrentText(text3);
    } else {
      setCurrentText(text4);
    }
  }, [value]);

  const text1 = `Hey I am Yash Malbhage , This is Text 1, Working Fine for Text 1`;
  const text2 = `Hey I am Avez Qureshi , This is Text 2, Working Fine for Text 2`;
  const text3 = `Hey I am Yash Khamkar , This is Text 3, Working Fine for Text 3`;
  const text4 = `Hey I am Rohit Baheti , This is Text 4, Working Fine for Text 4`;

  const displayedText =
    value < 30
      ? text1
      : value < 60
      ? text2
      : value < 90
      ? text3
      : text4;

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        style={{"width":"60%"}}
      />
      <p>{displayedText}</p>
    </div>
  );
};

export default RangeSlider;
