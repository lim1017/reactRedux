

import React, { useState } from "react";
import DropDownContainer from "./DropDownContainer";
import Convert from "./convert"

const Translate = (props) => {
  const options = [
    {
      label: "Afrikaans",
      value: "af",
    },
    {
      label: "Arabic",
      value: "ar",
    },
    {
      label: "Hindi",
      value: "hi",
    },
  ];
  const [lang, setLang] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <DropDownContainer
        options={options}
        selected={lang}
        setSelected={setLang}
        type="Language"
      />
      <hr />
      <Convert text={text} lang={lang} />
    </div>
  );
};

export default Translate;
