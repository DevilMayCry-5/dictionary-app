import { useState, React } from "react";

const Form = ({setSearchText}) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setSearchText(inputText)
  }

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
        <div className="searchbox">
          <input
            type="text"
            placeholder="Search for a word"
            value={inputText}
            onChange={handleChange}
            
          />
          <button type="submit">
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
