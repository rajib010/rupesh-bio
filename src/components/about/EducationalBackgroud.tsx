import React from 'react'
import { EducationalBackgroundComponentInfo } from '@/config'
import { Card } from '../ui/card'

const EducationalBackgroundComponent = () => {
    const EducationalBackground = EducationalBackgroundComponentInfo()
    return (
        <div className="container mt-5">
            <h1 className="text-left text-2xl font-bold mb-5 ml-16">Educational Background</h1>
            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {EducationalBackground && EducationalBackground.map((item) => (
                    <Card key={item.id}
                        className="rounded-lg p-4 text-center cursor-pointer shadow-xl tansistion hover:-translate-y-1">
                        <div className="center mb-2">
                            <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                        </div>
                        <h2 className="font-bold text-sm md:text-xl"> {item.label}</h2>
                        <p className="italic text-sm md:text-lg">{item.year}</p>
                        <p className="my-1 text-sm md:text-lg">{item.value}</p>
                        <p className="my-1 text-sm md:text-lg">{item.location}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default EducationalBackgroundComponent