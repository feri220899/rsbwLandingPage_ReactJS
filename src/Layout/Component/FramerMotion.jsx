import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
function FramerMotion({ initial,children }) {
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                } else {
                    controls.start("hidden");
                }
            },
            { threshold: 0.5 } // Memicu animasi ketika 50% elemen terlihat
        );
        const element = document.querySelector(`#${initial}`);
        if (element) {
            observer.observe(element);
        }
        return () => {
            if (element) observer.unobserve(element);
        };
    }, [controls]);
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    return (
        <motion.div id={initial} initial="hidden" animate={controls} variants={variants}>
            {children}
        </motion.div>
    )
}

export default FramerMotion