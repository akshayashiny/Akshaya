import './hero.css'
import { motion } from 'framer-motion';
import { useState } from 'react';
import DecryptedText from '../DecryptedText/DecryptedText'

export default function Hero() {
  const [showExtra, setShowExtra] = useState(false);

  const handleAnimationComplete = () => {
    setShowExtra(true);
  };

  return (
    <div className="Hero">
      <div className="details">
        <motion.h1
          initial={{ opacity: 0, y: -50 ,filter: 'blur(10px)',scale:2}}
          animate={{ y: 0,opacity: 1, filter: 'blur(0px)' ,scale:1}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          onAnimationComplete={handleAnimationComplete}
        >
          Hey there! <br />I'm<span className='name'>Akshaya</span> 
        </motion.h1>
        {showExtra && (
          <div className="extra-component">
            <DecryptedText text={'Shine\t.\tSream\t.\tSmile'}></DecryptedText>
          </div>
        )}  
      </div>
    </div>
  );
}