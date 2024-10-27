import React, { useEffect, useRef, useState } from 'react';
import { TweenMax, TimelineMax, Power1, Expo, Quint } from 'gsap';
// import './App.css'; // Make sure to import the CSS file

const MathUtils = {
    lerp: (a, b, n) => (1 - n) * a + n * b,
    distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
};

const ImageTrail = () => {
    const [images, setImages] = useState([]);
    const contentRef = useRef(null);
    const [imgPosition, setImgPosition] = useState(0);
    const [zIndexVal, setZIndexVal] = useState(1);
    const threshold = 50;

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
    const [cacheMousePos, setCacheMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const imgElements = Array.from(contentRef.current.querySelectorAll('img'));
        setImages(imgElements);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.pageX, y: e.pageY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const getMouseDistance = () => MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

    useEffect(() => {
        const render = () => {
            const distance = getMouseDistance();

            // Lerp to cache mouse position
            setCacheMousePos((prev) => ({
                x: MathUtils.lerp(prev.x || mousePos.x, mousePos.x, 0.1),
                y: MathUtils.lerp(prev.y || mousePos.y, mousePos.y, 0.1),
            }));

            if (distance > threshold) {
                showNextImage();
                setImgPosition((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                setZIndexVal((prev) => prev + 1);
                setLastMousePos(mousePos);
            }

            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    }, [mousePos, images]);

    const showNextImage = () => {
        const img = images[imgPosition];
        const rect = img.getBoundingClientRect();

        TweenMax.killTweensOf(img);
        new TimelineMax()
            .set(img, {
                startAt: { opacity: 0 },
                opacity: 1,
                zIndex: zIndexVal,
                x: cacheMousePos.x - rect.width / 2,
                y: cacheMousePos.y - rect.height / 2,
            }, 0)
            .to(img, 1.6, {
                ease: Expo.easeOut,
                x: mousePos.x - rect.width / 2,
                y: mousePos.y - rect.height / 2,
            }, 0)
            .to(img, 1, {
                ease: Power1.easeOut,
                opacity: 0,
            }, 0.4)
            .to(img, 1, {
                ease: Quint.easeInOut,
                y: `+=${window.innerHeight + rect.height / 2}`,
            }, 0.4);
    };

    return (
        <div ref={contentRef} className="relative overflow-hidden">
            <img src="https://res.cloudinary.com/dgtcjadsp/image/upload/v1729975243/DSC05763_hv0j5d.jpg" alt="Image 1" className="absolute pointer-events-none transition-opacity duration-400 ease-out w-64 h-64" />
            <img src="https://res.cloudinary.com/dgtcjadsp/image/upload/v1729960721/DSC00140_m7bohr.webp" alt="Image 2" className="absolute pointer-events-none transition-opacity duration-400 ease-out w-64 h-64" />
            <img src="https://res.cloudinary.com/dgtcjadsp/image/upload/v1729960722/DSC02364_1_fuerni.webp" alt="Image 3" className="absolute pointer-events-none transition-opacity duration-400 ease-out w-64 h-64" />
            {/* Add more images as needed, using the actual URLs you have */}
        </div>
    );
};

export default ImageTrail;
