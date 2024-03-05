"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./styles.css";

function Popup(props: any) {
  const { ref: firstRef, inView: firstView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);

    setTimeout(() => {
      props.setTrigger(false);
      setFadeOut(false);
    }, 400);
  };

  return props.trigger ? (
    <div className="popup-modal" ref={firstRef}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={fadeOut ? { opacity: 0, y: 20 } : {}}
        transition={{ duration: 0.4 }}
        className="secondAnimation"
        style={{ maxWidth: props.maxWidth }}
      >
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={firstView ? { y: 0, opacity: 1 } : {}}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="popup"
          style={{ maxWidth: props.maxWidth }}
        >
          <div>
            <button className="cancel-icon" onClick={handleClose}>
              <AiOutlineClose />
            </button>
            <div className="content" style={{ paddingTop: "50px" }}>
              {props.children}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
