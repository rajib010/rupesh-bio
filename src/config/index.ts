// technical skills 
import mysql from "@/assets/mysql.png"
import excel from "@/assets/excel.png"

// other skills

import agility from "@/assets/agility.png"
import communication from "@/assets/communication.png"
// import time from "@/assets/tim"
import criticalThinking from "@/assets/criticalthinking.png"
import mathematical from "@/assets/mathematical.png"

// educational
import bachelors from "@/assets/bachelors.png"
import school from "@/assets/school.png"
import highschool from "@/assets/highschool.png"

// experience


// trainings and certificates

import { CertificateCardProps } from "@/components/certificates/CertificateCard"

import { MapPinHouse, Mail, Phone, Twitter, Linkedin, Facebook } from "lucide-react"

import { useTranslation } from 'react-i18next';

export const MenuItemsList = () => {
    const { t } = useTranslation();

    const items = [
        {
            id: 'home',
            label: t('home'),
            path: '/'
        },
        {
            id: 'about',
            label: t('about'),
            path: '/about'
        },
        {
            id: 'certificates',
            label: t('certificates'),
            path: '/certificates'
        },
    ];

    return items;
};

export const TechnicalSkillsInfo = [

    {
        id: 1001,
        title: 'SQL',
        content: 'Manage relational databases',
        pic: mysql
    },
   
    {
        id: 1002,
        title: 'Excel',
        content: 'Analyze data efficiently',
        pic: excel
    }
];


export const OtherSkillsInfo = () => {

    const { t } = useTranslation();

    const items = [
        {
            id: 1,
            title: t('quick learner'),
            pic: agility,
            rating: 4.5
        },
        {
            id: 2,
            title: t('communication'),
            pic: communication,
            rating: 5
        },
        {
            id: 3,
            title: t('time management'),
            pic: '',
            rating: 4
        },
        {
            id: 4,
            title: t('critical thinking'),
            pic: criticalThinking,
            rating: 4.5
        },
        {
            id: 5,
            title: t('analytical skills'),
            pic: mathematical,
            rating: 4
        },
    ]
    return items;
}

export const FooterContactComponent = () => {
    const { t } = useTranslation()
    const items = [
        {
            id: 'email',
            value: 'ruesses021@gmail.com',
            icon: Mail
        },
        {
            id: 'phone',
            icon: Phone,
            value: '9861943178'
        },
        {
            id: 'address',
            icon: MapPinHouse,
            value: t('address')
        },
    ]
    return items
}

export const FooterSocialLinks = [
    {
        id: 'twitter',
        url: '',
        label: 'Twitter',
        icon: Twitter,
    },
    {
        id: 'linkedin',
        url: '',
        label: 'LinkedIn',
        icon: Linkedin
    },
    {
        id: 'facebook',
        url: '',
        label: 'Facebook',
        icon: Facebook
    },
]

export const EducationalBackgroundComponentInfo = () => {
    const { t } = useTranslation()

    const items = [
        {
            id: 101,
            label: t('school'),
            value: t('pashupatiAcademy'),
            location: t('address'),
            year: '2006-2018',
            pic: school
        },
        {
            id: 102,
            label: t('highSchool'),
            value: t('kathmanduBernhardtCollege'),
            location: t('balkhuKathmandu'),
            year: '2018-2020',
            pic: highschool
        },
        {
            id: 104,
            label: t('bachelors'),
            value: t('divyagyanCollege'),
            location: t('putalisadakKathmandu'),
            year: `2022 - ${t('now')}`,
            pic: bachelors
        },
        {
            id: 103,
            label: 'IELTS',
            value: '7.5 Overall',
            year: '2022',
            pic: ''
        }

    ]
    return items;
}

export const ProfessionalExperienceComponent = () => {
    const { t } = useTranslation()
    const items = [
        {
            id: 1,
            label: t('nothing'),
            pic: ''
        }
    ]
    return items;
}

export const CERTIFICATESINFO: CertificateCardProps[] = [
    {
        id: 1001,
        label: 'Any Certificate',
        year: '28 May, 2022',
        pic: ''

    },
    
]