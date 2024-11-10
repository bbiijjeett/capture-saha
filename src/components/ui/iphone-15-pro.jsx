import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  ...props
}) {

  const [imageSrc, setImageSrc] = useState(src);
  const imageRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  // useEffect(() => {
  //   // Trigger fade-in animation
  //   setFadeIn(false); // Reset fade-in to false
  //   const timer = setTimeout(() => {
  //     setImageSrc(src); // Update image source after fade-out
  //     setFadeIn(true);   // Trigger fade-in
  //   }, 300); // Match with the duration of the fade-out animation

  //   return () => clearTimeout(timer);
  // }, [src]);

  useEffect(() => {
    setFadeIn(false);
    // Start by animating the image out (up or down) before changing the source
    gsap.fromTo(
      imageRef.current,
      { y: 0, opacity: 1 },
      {
        y: -100, // Adjust for vertical slide-up effect
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // Set the new image source and start fade-in animation
          setImageSrc(src);
          gsap.fromTo(imageRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        }
      }
    );
  }, [src]);

  return (
    (<svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
        className="fill-[#FAF7F0] dark:fill-[#404040]" />
      <path
        d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
        className="fill-[#FAF7F0] dark:fill-[#404040] " />
      <path
        d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
        className="fill-[#FAF7F0] dark:fill-[#404040] " />
      <path
        d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
        className="fill-[#FAF7F0] dark:fill-[#404040] " />
      <path
        d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
        className="fill-[#FAF7F0] dark:fill-[#404040] " />
      <path
        d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
        className="dark:fill-[#262626] fill-white " />
      <path
        opacity="0.5"
        d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
        className="fill-[#FAF7F0] dark:fill-[#404040] " />
      <path
        d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
        className="fill-black dark:fill-[#404040] stroke-[#FAF7F0] dark:stroke-[#404040] stroke-[0.5] " />
      {/* {src && (
        <image
          href={src}
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)" 
          className={`transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}  
        />
      )} */}

      {/* Mask and ClipPath for Overflow Hidden */}
      <defs>
        {/* ClipPath for the rounded screen */}
        <clipPath id="roundedScreen">
          <rect x="21.25" y="19.25" width="389.5" height="843.5" rx="55.75" ry="55.75" />
        </clipPath>
        
        {/* Mask to apply strict overflow hidden behavior */}
        <mask id="screenMask">
          <rect x="21.25" y="19.25" width="389.5" height="843.5" fill="white" />
        </mask>
      </defs>

      {imageSrc && (
        <image
          href={imageSrc}
          ref={imageRef}
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedScreen)"
          mask="url(#screenMask)"
          className={`transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      <path
        d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
        className="dark:fill-[#262626] fill-[#F5F5F5] " />
      <path
        d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
        className="dark:fill-[#262626] fill-[#F5F5F5] " />
      <path
        d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
        className="fill-[#E5E5E5] dark:fill-[#404040] " />

      
      {/* <defs>
        <clipPath id="roundedCorners">
          <rect x="21.25" y="19.25" width="389.5" height="843.5" rx="55.75" ry="55.75" />
        </clipPath>
        
      </defs> */}
    </svg>)
  );
}
