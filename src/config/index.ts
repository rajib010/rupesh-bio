// technical skills 
import mysql from "@/assets/mysql.png"
import excel from "@/assets/excel.png"
import word from "@/assets/word.png"
import powerpoint from "@/assets/powerpoint.png"
import powerbi from "@/assets/powerbi.png"
import r from "@/assets/r.png"

// other skills

import agility from "@/assets/agility.png"
import communication from "@/assets/communication.png"
import time from "@/assets/time.png"
import criticalThinking from "@/assets/criticalthinking.png"
import mathematical from "@/assets/mathematical.png"
import problemsolving from "@/assets/problemsolver.png"

// educational
import bachelors from "@/assets/bachelors.png"
import school from "@/assets/school.png"
import highschool from "@/assets/highschool.png"
import masters from "@/assets/masters.png"

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
    },
    {
        id: 1003,
        title: 'Word',
        content: 'Create & Edit Documents',
        pic: word
    },
    {
        id: 1004,
        title: 'Powerpoint',
        content: 'Design and present slides',
        pic: powerpoint
    },
    {
        id: 1005,
        title: 'R Programming',
        content: 'Analyze & Visualize data',
        pic: r
    },
    {
        id: 1006,
        title: 'Power BI',
        content: 'Visualize Business Insights',
        pic: powerbi
    },
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
            pic: time,
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
        {
            id: 6,
            title: t('problemSolving'),
            pic: problemsolving,
            rating: 4.5
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
            year: '-------',
            pic: school
        },
        {
            id: 102,
            label: t('highSchool'),
            value: t('nasa'),
            location: t('tinkune'),
            year: '-----',
            pic: highschool
        },
        {
            id: 104,
            label: t('bachelors'),
            value: t('smstu'),
            location: t('balkhuKathmandu'),
            year: `-------`,
            pic: bachelors
        },
        {
            id: 103,
            label: t('masters'),
            value: t('ratnarajyalaxmi'),
            location: t('pradarsaniMarga'),
            year: '-----',
            pic: masters
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