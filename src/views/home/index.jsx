import React, { useState } from "react";
import TypingCard from '@/components/TypingCard'
import "./index.less";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState(
    [`欢迎进入${process.env.REACT_APP_PROJECT_NAME}`]
  );

  return (
    <div className="app-container">
      <TypingCard title='首页板块' source={text} />
    </div>
  );
};

export default Home;
