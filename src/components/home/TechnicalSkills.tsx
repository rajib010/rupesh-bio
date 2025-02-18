import React, { useTransition } from "react";
import { TechnicalSkillsInfo } from "@/config";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export type TechnicalSkillsType = {
    id: number;
    title: string;
    content: string;
    pic: string
}

const TechnincalSkills = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1 className="text-center text-2xl font-bold mb-5">{t('technical skills')}</h1>
            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {TechnicalSkillsInfo.map((item) => (
                    <Card key={item.id}
                        className="rounded-lg p-4 text-center cursor-pointer shadow-xl tansistion hover:-translate-y-1">
                        <div className="center mb-2">
                            <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                        </div>
                        <h2 className="font-bold text-sm md:text-xl"> {item.title}</h2>
                        <p className="my-1 text-sm lg:text-lg">{item.content}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TechnincalSkills;
