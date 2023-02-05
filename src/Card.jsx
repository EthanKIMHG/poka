import React from "react";
import Tilt, {OnMoveParams} from 'react-parallax-tilt';

const Card = () => {

  const glare = "#ffffff 0%, #f80e7b 3%, #eedf10 6%, #21e985 9%, #0dbde9 12%, #c929f1 15%, #f80e7b 18%, #eedf10 21%, #21e985 24%, #0dbde9 27%, #c929f1 30%,#ffffff 33%, #f80e7b 36%, #eedf10 39%, #21e985 42%, #0dbde9 45%, #c929f1 48%, #f80e7b 51%, #eedf10 54%, #21e985 57%, #0dbde9 60%, #c929f1 63%,#ffffff 66%, #f80e7b 69%, #eedf10 72%, #21e985 75%, #0dbde9 78%, #c929f1 81%, #f80e7b 84%, #eedf10 87%, #21e985 90%, #0dbde9 93%, #c929f1 96%, #ffffff 99%";
  const glare2 = "rgb(255, 119, 115) 10%, rgba(255,237,95,1) 20%, rgba(168,255,95,1) 30%, rgba(131,255,247,1) 40%, rgba(120,148,255,1) 50%, rgb(216, 117, 255) 60%, rgb(255, 119, 115) 70%, rgb(255, 119, 115) 80%, rgba(255,237,95,1) 90%, rgba(168,255,95,1) 100%"

  return (
    <div className='tilt' >
            <Tilt  glareEnable={true} glareMaxOpacity={0.6} glarePosition="all"  transitionSpeed={400}
            scale={1.5} tiltMaxAngleX={30} tiltMaxAngleY={30}
            glareColor={glare2}
            >
              <div className='a'/>
              <div className='c' />
            </Tilt>
    </div>
  );
};

export default Card;
