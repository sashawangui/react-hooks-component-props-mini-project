import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    // Function to generate coffee cups or bento boxes emojis based on article minutes
    const generateEmojis = (minutes) => {
      if (minutes < 30) {
        const coffeeCups = Math.ceil(minutes / 5); // calculate the number of coffee cups needed based on the given minutes.
        return "☕️".repeat(coffeeCups); // repeat coffee cup emojis per coffeeCups obtained
      } else {
        // condition if minutes > 30
        const bentoBoxes = Math.ceil(minutes / 10);
        return "🍱".repeat(bentoBoxes);
      }
    };
  
    return (
      <main>
        {posts.map((post) => {
          const minutes = post.minutes;
          const emojis = generateEmojis(minutes); // call the generateEmojis and pass minutes arg from each post
          const displayTime = `${emojis} ${minutes} min read`; // concat emojis, minutes, and str to: ☕️☕️ 7 min read
  
          return (
            <Article
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}
              displayTime={displayTime} // pass displayTime str result as prop to the child
            />
          );
        })}
      </main>
    );
  }

export default ArticleList