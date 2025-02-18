import React from "react";

import { OtherSkillsInfo } from "@/config";
import { Card } from "@/components/ui/card";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0; 
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-gray-800 dark:text-orange-500" />);
    }

    // Half star
    if (halfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-gray-800 dark:text-orange-500" />);
    }

    // Empty stars
    for (let i = stars.length; i < 5; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400 dark:text-slate-200" />);
    }

    return <div className="flex justify-center space-x-1">{stars}</div>;
};

const OtherSkills = () => {
    const {t} = useTranslation()
    const otherSkills = OtherSkillsInfo()
    return (
        <div className="container my-5">
            <h1 className="text-center text-2xl font-bold mb-5">{t('other skills')}</h1>
            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherSkills.map((item) => (
                    <Card
                        key={item.id}
                        className="relative rounded-lg p-4 text-center cursor-pointer shadow-xl transition hover:-translate-y-1"
                    >
                        <div className="center mb-2">
                            <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                        </div>
                        <h2 className="font-bold text-sm md:text-xl">{item.title}</h2>
                        
                        <div className="m-1">
                            {renderStars(item.rating)}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default OtherSkills;
