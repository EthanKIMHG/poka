import React, {useEffect, useRef} from 'react'

const Client = () => {

  const ref = useRef(null);
  useEffect(() => {
    function handleScroll(e) {
      console.log(e.clientX, e.clientY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const node = ref.current;
    node.style.opacity = 1; // Trigger the animation
    return () => {
      node.style.opacity = 0; // Reset to the initial value
    };
  }, []);

  return (
    <>
      <div className='a1'>Client</div>
      <div className='sq' ref={ref}>123123</div>
    </>
  );
};

export default Client;
