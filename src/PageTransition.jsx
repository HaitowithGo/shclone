import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const page = pageRef.current;

    // 入場アニメーション
    gsap.fromTo(page,
      { 
        opacity: 0,
        filter: 'blur(20px)',
        y: 20
      },
      { 
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.0, // 1.8秒に延長
        ease: 'power2.out' // イージングを微調整
      }
    );

    // クリーンアップ関数（退場アニメーション）
    return () => {
      gsap.to(page, {
        opacity: 0,
        filter: 'blur(20px)',
        y: -20,
        duration: 1.0, // 1.2秒に延長
        ease: 'power2.in' // イージングを微調整
      });
    };
  }, [location]);

  return <div ref={pageRef} className="page-transition">{children}</div>;
};

export default PageTransition;