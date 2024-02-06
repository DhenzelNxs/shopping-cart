import React from 'react';
import './NotFound.css';
import { HiOutlineEmojiSad } from 'react-icons/hi';


export default function NotFound() {
  return(
    <section className="not-found-container">
      <div>
        <HiOutlineEmojiSad size={100}/>
      </div>
      <div className="centered">
        <h1 className="title">404 NOT FOUND</h1>
      </div>
    </section>
  );
}
