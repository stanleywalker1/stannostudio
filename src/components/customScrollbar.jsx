import React, { useRef, useEffect } from 'react';
import './CustomScrollbar.css';

const CustomScrollbar = ({ targetSelector }) => {
  const scrollRef = useRef(null);

  useEffect(() => {

    console.log('UseEffect running');
    const scrollContainer = document.querySelector(targetSelector);
    console.log('Target Selector:', targetSelector);
    console.log('Scroll Container:', scrollContainer);
   
    if (!scrollContainer || !scrollRef.current) return;

    // Initialize height
    const { scrollHeight, clientHeight } = scrollContainer;
    const initialHeight = (clientHeight / scrollHeight) * 100;
    scrollRef.current.style.height = `${initialHeight}%`;

    console.log(scrollContainer.scrollHeight, scrollContainer.clientHeight, scrollContainer.scrollTop);

    const handleScroll = () => {
        console.log('handleScroll triggered');
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      scrollRef.current.style.height = `${scrollPercentage}%`;
    };

    // Mouse events for drag and scroll
    const handleMouseDown = (e) => {
        console.log('handleMouseDown triggered');
      const { clientY } = e;
      const initialTop = scrollRef.current.getBoundingClientRect().top;

      const onMouseMove = (eMove) => {
        const delta = eMove.clientY - clientY;
        const newTop = initialTop + delta;
        
        const scrollPercentage = (newTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight)) * 100;
        scrollContainer.scrollTop = (scrollPercentage / 100) * (scrollContainer.scrollHeight - scrollContainer.clientHeight);
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    scrollRef.current.addEventListener('mousedown', handleMouseDown);

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollRef.current.removeEventListener('mousedown', handleMouseDown);
    };
  }, [targetSelector]);

  return <div className="custom-scrollbar" ref={scrollRef}></div>;
};

export default CustomScrollbar;
