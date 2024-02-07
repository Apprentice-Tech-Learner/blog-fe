import React, {useEffect, useRef, useState} from "react";

import LikeBtn from "components/atom/LikeBtn";
import Share from "./Share";

const Snbs = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    const snbRef = useRef<HTMLDivElement>();

    const handleScroll = () => {
        const snbTop = snbRef.current.offsetTop;
        setScrollY(window.scrollY);
        if (scrollY > snbTop - 112) {
            setScrollActive(true);
        } else {
            setScrollActive(false);
        }
    };

    useEffect(() => {
        const scrollListener = () => {
            window.addEventListener('scroll', handleScroll);
        };
        scrollListener();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <div className='snbs-positioner' ref={snbRef}>
            <div className={scrollActive ? 'fixed' : ''}>
                <div className='snb-container'>
                    <LikeBtn activeClassName='minwidth-1024px-active' direction='column' />
                    <Share />
                </div>
            </div>
        </div>
    );
};

export default Snbs;
