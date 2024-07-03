import React, { useState } from 'react';
import { ChatBox } from './index'

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log(message)
      setMessage('');
    }
  };

  return (
    <div className='chat-section'>

      <section>
        <div className="chat-block">
          <ChatBox
            id="1"
            status="receive"
            message="Lorem ipsum"
          />
          <ChatBox
            id="2"
            status="send"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati itaque? Qui recusandae optio quod incidunt cum corporis neque nulla amet excepturi eligendi. Fuga, facilis atque?"
          />
          <ChatBox
            id="1"
            status="receive"
            message="Lorem ipsum"
          />
          <ChatBox
            id="2"
            status="send"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati itaque? Qui recusandae optio quod incidunt cum corporis neque nulla amet excepturi eligendi. Fuga, facilis atque?"
          />
          <ChatBox
            id="1"
            status="receive"
            message="Lorem ipsum"
          />
          <ChatBox
            id="2"
            status="send"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati itaque? Qui recusandae optio quod incidunt cum corporis neque nulla amet excepturi eligendi. Fuga, facilis atque?"
          />
          <ChatBox
            id="1"
            status="receive"
            message="Lorem ipsum"
          />
          <ChatBox
            id="2"
            status="send"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati itaque? Qui recusandae optio quod incidunt cum corporis neque nulla amet excepturi eligendi. Fuga, facilis atque?"
          />
          <ChatBox
            id="1"
            status="receive"
            message="Lorem ipsum"
          />
          <ChatBox
            id="2"
            status="send"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati itaque? Qui recusandae optio quod incidunt cum corporis neque nulla amet excepturi eligendi. Fuga, facilis atque?"
          />
          <ChatBox
            id="1"
            status="receive"
            message="Lorem ipsum"
          />
          <ChatBox
            id="2"
            status="send"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati itaque? Qui recusandae optio quod incidunt cum corporis neque nulla amet excepturi eligendi. Fuga, facilis atque?"
          />
          <ChatBox
            id="1"
            status="receive"
            message="Lorem ipsum"
          />
          <ChatBox
            id="2"
            status="send"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati itaque? Qui recusandae optio quod incidunt cum corporis neque nulla amet excepturi eligendi. Fuga, facilis atque?"
          />
          <ChatBox
            id="2"
            status="send"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati "
          />
          <ChatBox
            id="2"
            status="receive"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ad excepturi vero esse obcaecati itaque? Qui recusandae optio quod incidunt cum corporis neque nulla amet excepturi eligendi. Fuga, facilis atque?"
          />
        </div >
      </section >
      {/* FORM */}
      <form form onSubmit={handleSubmit} className="chat-input-form" >
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form >
    </div >
  );
};

export default ChatInput;
