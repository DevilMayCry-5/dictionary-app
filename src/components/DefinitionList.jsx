import React from "react";
import DefinitionItem from "./DefinitionItem";

const DefinitionList = ({ data }) => {
  let key = 1
  return (
    <div>
      <div className="searched-word">
        <h1>{data[0] ? data[0].word : data.title}</h1>
        <span>
          <a
            href={`https://www.google.com/search?q=${data[0] && data[0].word}`}
            target="_blank"
            rel="noreferrer"
          >
            {data[0] && data[0].meanings[0].partOfSpeech}
          </a>
        </span>
      </div>
      <ol>
        {data[0] &&
          data[0].meanings[0].definitions.map((definition) => {
            return <DefinitionItem key={key++} definition={definition} />;
          })}
      </ol>
    </div>
  );
};

export default DefinitionList;
