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
import internshipIcon from "@/assets/internship.png"
import work from "@/assets/work.png"
import work2 from "@/assets/work2.png"

// trainings and certificates
import sqltraining from "@/assets/sqltraining.jpeg"
import inclusiveInsurance from "@/assets/inclusiveinsurance.jpeg"
import internship from "@/assets/internship.jpeg"
import rbsexperience from "@/assets/rbsexperience.jpeg"
import professionalSkillDevelopment from "@/assets/professionalskilldevelopment.jpeg"
import workshoponacturial from "@/assets/workshoponacturial.jpeg"
import riskmgmt from "@/assets/riskmanagement.jpeg"

import { CertificateCardProps } from "@/components/certificates/CertificateCard"

import { MapPinHouse, Mail, Phone, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

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
            value: '+977 9861943178'
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
        id: 'insta',
        url: 'https://www.instagram.com/russesbro/',
        label: 'Instagram',
        icon: Instagram,
    },
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/rupesh-pokhrel-639458201/',
        label: 'LinkedIn',
        icon: Linkedin
    },
    {
        id: 'facebook',
        url: 'https://www.facebook.com/russes.bro?rdid=u8zpqBufm58dESji&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15siQ8bWgq%2F',
        label: 'Facebook',
        icon: Facebook
    },
    {
        id: 'twitter',
        url: 'https://x.com/RussesB',
        label: 'Twitter',
        icon: Twitter
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
            year: '2004-2013',
            pic: school
        },
        {
            id: 102,
            label: t('highSchool'),
            value: t('nasa'),
            location: t('tinkune'),
            year: '2013 - 2015',
            pic: highschool
        },
        {
            id: 104,
            label: t('bachelors'),
            value: t('smstu'),
            location: t('balkhuKathmandu'),
            year: `2016 - 2020/21`,
            pic: bachelors
        },
        {
            id: 103,
            label: t('masters'),
            value: t('ratnarajyalaxmi'),
            location: t('pradarsaniMarga'),
            year: '2022 - 2025',
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
            label: t('internship'),
            pic: internshipIcon,
            value:t('rbs'),
            location:t('ramshahpath'),
            year:'28 Dec 2020 - 06 Aug 2021'
        },
        {
            id: 2,
            label: t('sa'),
            pic: work,
            value:t('rbs'),
            location:t('ramshahpath'),
            year:'28 Dec 2020 - 18 June 2022'
        },
        {
            id: 1,
            label: 'Actuarial & Re-Insurance Analyst    ',
            pic: work2,
            value:t('nlic'),
            location:t('kamaladi'),
            year:`19 June 2022 - ${t('now')}`
        },
    ]
    return items;
}

export const CERTIFICATESINFO: CertificateCardProps[] = [
    {
        id: 1006,
        label: 'Risk Management & Insurance',
        year: '17 - 18 September, 2018',
        pic: riskmgmt
    },
    {
        id: 1001,
        label: 'Pricing and Reserving in Life Insurance',
        year: '02-03 December, 2019',
        pic: professionalSkillDevelopment

    },
    {
        id: 1002,
        label: "Workshop on Actuarial Science and it's Applications",
        year: 'Sept 29 - Oct 01, 2021',
        pic: workshoponacturial

    },
    {
        id: 1003,
        label: 'Internship Experience Letter',
        year: '28 Dec 2020 - 06 Aug 2021',
        pic: internship
    },
    {
        id: 1004,
        label: 'Work Experience From RBS',
        year: '28 Dec 2020 - 18 June 2022',
        pic: rbsexperience
    },
    {
        id: 1005,
        label: 'Inclusive Insurance Training',
        year: '18-20 Dec, 2024',
        pic: inclusiveInsurance
    },
    {
        id: 1006,
        label: 'In House SQL Trainning',
        year: '13-28 Nov, 2024',
        pic: sqltraining
    },
]