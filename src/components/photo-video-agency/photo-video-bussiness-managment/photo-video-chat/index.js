import React from "react";
import style from './chat.module.scss';
import Link from "next/link";
const PhotoStrategicChat = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
<img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/chat-messages.svg" alt="chat-messages" />
  <div className={style.chatmessages}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/chat-modal-reate-deparment.svg" alt="chat-modal-reate-deparment"/>
    
  </div>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Strategic</h4>
<h3>Chat &</h3>
<h2>Task management </h2>
    <p>Communicate with your entire team working on the project all in one place. With meMate, you have team 
      chat and project chat capabilities to ensure your creative team stays up to date and informed at all times.</p>
      <Link href="/features/task-management-software">Communication</Link>
</div>

</div>
</> 
  );
};

export default PhotoStrategicChat;

