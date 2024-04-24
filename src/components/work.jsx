import { CheckCircle2 } from 'lucide-react';
import codeImg from '../assets/code.png';
import { bulletPointItems } from '../constants';

const WorkSection = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                Speed up your {" "}
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                    Software workflow.
                </span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-4 mt-5 w-full lg:w-1/2">
                    <img className="lg:pl-20 md:mx-auto pl-1" src={ codeImg } alt="code" /> 
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {bulletPointItems.map((item, index) => (
                        <div key={ index } className="flex mb-12">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center intems-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{ item.title }</h5>
                                <p className="text-md text-neutral-500">{ item.description }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WorkSection;