import React, { useEffect } from 'react';
import './Comments.css';

const Comments: React.FC = () => {
  useEffect(() => {
    const SCRIPT_URL = "https://commentkit.ankush.one/bundle.js";
    
    // Check if script is already present
    let script = document.querySelector(`script[src="${SCRIPT_URL}"]`) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="commentkit-wrapper">
      <div data-commentkit />
    </div>
  );
};

export default Comments;
