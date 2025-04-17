import React from 'react';
import ServiceCard from '../../components/cards/serviceCard';
import {
    faLaptopCode,
    faRobot,
    faLightbulb,
    faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        icon: faLaptopCode,
        serviceType: "Web development",
        serviceDescription: "Biz sizning brendingiz va maqsadlaringizga mos zamonaviy veb-saytlar yaratamiz.",
        moreDescriptions: [
            "SEO-ga moslashtirilgan saytlar",
            "Interaktiv interfeys va foydalanuvchi tajribasi",
            "Kontentni boshqarish tizimi integratsiyasi",
        ]
    },
    {
        icon: faRobot,
        serviceType: "Telegram botlar",
        serviceDescription: "Telegram botlar orqali avtomatlashtirilgan va qulay xizmat ko‘rsatish tizimlarini yaratamiz.",
        moreDescriptions: [
            "Buyurtmalar va so‘rovlarni boshqarish",
            "To‘lov tizimlari bilan integratsiya",
            "Avtomatik xabarlar va foydalanuvchi javoblari",
        ]
    },
    {
        icon: faMobileScreenButton,
        serviceType: "E-commerce (internet do'kon)",
        serviceDescription: "Biznesingiz uchun samarali, funksional va foydalanuvchiga qulay internet do‘koni.",
        moreDescriptions: [
            "Mahsulotlar katalogi va qidiruv tizimi",
            "Onlayn to‘lov va yetkazib berish integratsiyasi",
            "Xaridlar tarixi va foydalanuvchi profili",
        ]
    },
    {
        icon: faLightbulb,
        serviceType: "Onlayn o'quv platformalari",
        serviceDescription: "Zamonaviy, qulay va interaktiv onlayn ta’lim tizimlarini yaratamiz.",
        moreDescriptions: [
            "Moslashtirilgan kurslar va darslar tizimi",
            "Video va rasm formatidagi darsliklar",
            "Reyting, test va yutuqlarni kuzatish imkoniyati",
        ]
    }
];


function Service() {
    return (
        <div id='service' className="service w-full p-1 my-10 sm:p-3 border-dotted border-[#1F1F1F] border rounded-2xl">
            <div className="mb-8 w-full bg-[#1A1A1A] p-2 sm:p-4 lg:p-5 rounded-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-[#F9EFEC]">Xizmatlar</h2>
            </div>

            <div className="services w-full grid gap-6 grid-cols-1 md:grid-cols-2">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    );
}

export default Service;
