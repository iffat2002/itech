import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ServiceItem = ({ item, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const direction = index % 2 === 0 ? 'left' : 'right';

    const cardVariants = {
        hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            className={`flex max-w-[1070px] mx-auto flex-col md:flex-row relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="w-full md:w-[60%] flex items-center justify-center py-[4%] flex-1 relative">
                <img src={item?.image} className="w-full" alt="Services" />
                <div className="absolute bg-transparent h-full w-full top-0 left-0"></div>
            </div>
            <div className={`w-full md:w-[40%] ${index % 2 === 0 ? 'md:pl-10 sm:pl-10 sm:pr-2 extrasm:pl-7 extrasm:pr-4' : 'md:pr-10 sm:pr-10 sm:pl-2 extrasm:pr-7 extrasm:pl-4'} flex flex-1 justify-center flex-col py-[4%]`}>
                <h1 className='text-2xl font-bold text-gray-800'>
                    {item?.title}
                </h1>
                <p className="text-gray-900 text-xl mt-8">
                    {item?.text}
                </p>
            </div>
        </motion.div>
    );
};

export default ServiceItem;
