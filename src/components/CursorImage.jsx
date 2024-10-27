import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const images = [
    'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729975243/DSC05763_hv0j5d.jpg',
    'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729960721/DSC00140_m7bohr.webp',
    'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729960722/DSC02364_1_fuerni.webp',
    'https://res.cloudinary.com/dgtcjadsp/image/upload/v1730000632/pratik_hgsfmn.jpg',
    'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729960722/DSC08544_t7nd82.webp',
    'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729975240/429187786_707299028156629_9194629566961149844_n_tbuxjx.jpg',
    'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729975242/IMG_7567_b3k40g.jpg',
    'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729975819/DSC01942_1_sjnasn.webp',
]; // Add the URLs of your 10 images here

const BUFFER_DISTANCE = 50; // Distance to move before showing the next image

const CursorImage = () => {
    const imageRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
    const [imagesToShow, setImagesToShow] = useState([]);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;

            // Calculate distance moved since last position
            const distanceMoved = Math.sqrt(
                Math.pow(x - lastPosition.x, 2) + Math.pow(y - lastPosition.y, 2)
            );

            // Check if the cursor has moved beyond the buffer distance
            if (distanceMoved > BUFFER_DISTANCE) {
                // Update the current image index and prepare the next images
                setImagesToShow((prevImages) => {
                    const newIndex = (currentImageIndex + 1) % images.length;
                    return [...prevImages, images[newIndex]].slice(-4); // Keep the last 4 images
                });
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setLastPosition({ x, y });

                // Fade in and scale up animation for the current image
                gsap.to(imageRef.current, {
                    scale: 1.2, // Scale up from a circular shape
                    opacity: 1, // Fade in
                    duration: 0.3,
                    ease: 'power2.out',
                });

                // Fade out after 1 second
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                const newTimeoutId = setTimeout(() => {
                    gsap.to(imageRef.current, {
                        opacity: 0, // Fade out
                        scale: 0.8, // Scale down
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }, 500); // Wait for 1 second before starting to fade out
                setTimeoutId(newTimeoutId);
            }

            // Animate the image position
            gsap.to(imageRef.current, {
                x: x + 10, // Adjust for offset from cursor
                y: y + 10,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(imageRef.current, {
                opacity: 0,
                scale: 0.8, // Scale down
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timeoutId); // Cleanup timeout
        };
    }, [lastPosition, timeoutId, currentImageIndex]);

    return (
        <div className="relative">
            {/* Render images behind the current one */}
            {imagesToShow.map((img, index) => (
                <div
                    key={index}
                    className="absolute pointer-events-none w-64 h-64 bg-no-repeat bg-contain  "
                    style={{
                        backgroundImage: `url(${img})`,
                        opacity: 0.5, // Set a lower opacity for behind images
                        zIndex: -index, // Stack behind the current image
                         
                    }}
                />
            ))}

            <div
                ref={imageRef}
                className="absolute pointer-events-none w-64 h-64 bg-no-repeat bg-contain  "
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    opacity: 0,
                    scale: 0.8, // Start with scale down
                
                }}
            ></div>
        </div>
    );
};

export default CursorImage;