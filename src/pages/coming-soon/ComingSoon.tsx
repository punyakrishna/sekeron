import React, { useEffect, useRef, useState } from 'react'
import ImageAssets from '../../assets';
import styles from './ComingSoon.module.css'

const ComingSoon = () => {

    const [showAnimatedGif, setShowAnimatedGif] = useState(true);
    const videoRef = useRef(null);


    const switchImages = () => {
        setShowAnimatedGif(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(switchImages, 3000);

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures the effect runs only once


    // useEffect(() => {
    //     const video: any = videoRef.current;

    //     if (showAnimatedGif) {
    //         video?.play();
    //     }

    //     video.addEventListener('ended', switchImages);

    //     return () => {
    //         video.removeEventListener('ended', switchImages);
    //     };
    // }, []);

    return (
        <div className={styles["container"]}>
            {/* Initially, display the animated GIF */}
            {showAnimatedGif ? (
                <img src={ImageAssets.gif_sekeron_logo} alt="Static Image" />
                // <video ref={videoRef} id="myVideo" width="300" height="200" autoPlay
                //     // controls
                //     src={ImageAssets.vi_sekeron}
                // >
                //     {/* <source src={''} type="video/mp4" />
                //     Your browser does not support the video tag. */}
                // </video>
            )
                :
                <div className={styles["static-container"]}>
                    <img src={ImageAssets.ic_sekeron} alt="Static Image" />
                    <p>Coming soon</p>
                </div>
            }
        </div>
    )
}

export default ComingSoon