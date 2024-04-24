import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                ComputR the ultimate empowerment
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                    { " " } for engineers
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Decode and encode your life with our products and services. 
                Prime your load catchers and boost your desktop wallpaper!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-3 mx-3 rounded-md">Join us now</a>
                <a href="#" className="px-4 py-3 mx-3 rounded-md border">Documentation</a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4">
                    <source src={ video1 } type="video/mp4" />
                    Your browser is does not support the video tag
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4">
                    <source src={ video2 } type="video/mp4" />
                    Your browser is does not support the video tag
                </video>
            </div>
        </div>
    );
}

export default HeroSection;