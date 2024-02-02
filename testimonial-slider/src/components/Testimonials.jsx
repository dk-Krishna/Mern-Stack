import React, { Fragment, useState } from "react";

// imorting components
import Card from "./Card.jsx";

// importing react icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = ({ reviews })=> {

    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index-1 < 0) {
            setIndex(reviews.length - 1);
        } else {
            setIndex(index-1);
        }
    };

    function rightShiftHandler() {
        if(index+1 >= reviews.length) {
            setIndex(0);
        } else {
            setIndex(index+1);
        }
    };

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    };

    return (
        <Fragment>
            <div className="w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 trasition-all duration-700 hover:shadow-xl">
                <Card review={reviews[index]} />

                <div className='flex text-3xl justify-center mt-10 gap-3 text-violet-400 font-bold'>
                    <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
                        <FiChevronLeft />
                    </button>
                    <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                        <FiChevronRight />
                    </button>
                </div>

                <div className="mt-6">
                    <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                        Surprise Me
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Testimonials;