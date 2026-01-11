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
    <section className="mb-12">
      <div className='mb-4'></div>
      <h2 className="text-2xl font-semibold mb-4">如果安装遇到遇到了问题，请留言，我会及时解决</h2>
      <div className="commentkit-wrapper">
      <div data-commentkit />
      </div>
    </section>
  );
};

export default Comments;
