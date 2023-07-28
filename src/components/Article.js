import React from "react";

function Article({ title, date, preview, displayTime }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} ? {date} - {displayTime } : January 1, 1970</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;