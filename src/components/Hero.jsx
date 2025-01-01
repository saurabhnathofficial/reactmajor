import React, { useRef, useState } from "react";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [handleClicked, setHandleClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 3;

    const nextVideoRef = useRef(null);
    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }
    const upComingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMinVdClick = () =>{
        setHandleClicked(true);
        setCurrentIndex(upComingVideoIndex);
    }


    const getvideoSource = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursot-pointer overflow-hidden rounded-lg">
                    <div onClick={handleMinVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video 
                        ref={nextVideoRef}
                        src={getvideoSource(upComingVideoIndex)}
                        loop
                        muted
                        id="current-video"
                        className="size-64 origin-center scale-150 object-cover object-center"
                        onLoad
                        />                          
                    </div>
                </div>
                
                <video
                    ref={nextVideoRef}
                    src={getvideoSource(currentIndex)}
                    loop
                    muted
                    id="next-video"
                    className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                    onLoad={handleVideoLoad}
                />

                <video 
                src={getvideoSource(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"                
                onLoadedData={handleVideoLoad}
                />
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                G<b>a</b>ming
            </h1>
            <div className="absolute left-0 top-0 z-40 size-full">

                <div className="mt-24 px-5 sm:px-10">

                    <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
