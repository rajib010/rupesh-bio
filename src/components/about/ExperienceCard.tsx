import React from 'react'
import { ProfessionalExperienceComponent } from '@/config'
import { Card } from '../ui/card'
import { useTranslation } from 'react-i18next'

const ExperienceComponent = () => {
    const ProfessionalExperience = ProfessionalExperienceComponent();
    const {t}= useTranslation()
    return (
        <div className="container mt-5">
            <h1 className="text-left text-2xl font-bold mb-5 ml-16">{t('professionalExperience')}</h1>
            <div className="w-[90%] mx-auto grid grid-cols-3 md:grid-cols-4 gap-4">
                {ProfessionalExperience && ProfessionalExperience.map((item) => (
                    <Card key={item.id}
                        className="rounded-lg p-4 text-center cursor-pointer shadow-xl tansistion hover:-translate-y-1">
                        <div className="center mb-2">
                            <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                        </div>
                        <h2 className="font-semibold text-sm md:text-lg"> {item.label}</h2>
                        {/* <p className="italic">{item.year}</p>
                        <p className="my-1">{item.value}</p>
                        <p className="my-1">{item.location}</p> */}
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ExperienceComponent