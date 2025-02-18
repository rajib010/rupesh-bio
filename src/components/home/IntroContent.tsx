import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import userImage from "@/assets/image.jpg";
import { Link } from 'react-router-dom';

const IntroContent = () => {

    const { t } = useTranslation();
    return (
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-between items-center py-5 gap-5 text-black dark:text-white">
            {/* Image Section */}
            <div className="w-full lg:w-[30%] flex justify-center">
                <img
                    src={userImage}
                    alt="User"
                    className="w-40 sm:w-60 lg:w-64 rounded-full"
                />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[60%] text-center lg:text-left flex flex-col gap-4">
                <h3 className="text-2xl font-bold md:text-4xl">{t('welcome')}</h3>
                <h3 className="text-xl sm:text-3xl">{t('introduction')}</h3>
                <p className=" md:text-base lg:text-lg">
                    {t('bio')}
                </p>
                <Button className="bg-slate-200 hover:bg-slate-400 shadow-xl dark:bg-slate-900 dark:hover:bg-slate-950">
                    <Link to={'/about'} className='text-black dark:text-white '>{t('seeMore')}</Link>
                </Button>
            </div>
        </div>
    );
};

export default IntroContent;
