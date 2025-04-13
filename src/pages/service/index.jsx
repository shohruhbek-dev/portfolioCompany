import React from 'react';
import ServiceCard from '../../components/cards/serviceCard';
import {
    faLaptopCode,
    faMobileScreenButton,
    faRobot,
    faLightbulb
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
        icon: faMobileScreenButton,
        serviceType: "Moslashuvchan ishlab chiqish",
        serviceDescription: "Saytingiz barcha qurilmalarda ideal ko‘rinish va ishlashni ta’minlaymiz.",
        moreDescriptions: [
            "Mobil va planshet versiyalar",
            "Har xil brauzerlarda bir xil ishlash",
            "Adaptiv dizayn va tizimli tuzilma",
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
        icon: faLightbulb,
        serviceType: "IT maslahatlar",
        serviceDescription: "Biznesingiz uchun samarali IT strategiyalar va yechimlar bo‘yicha maslahat beramiz.",
        moreDescriptions: [
            "Loyihani boshlashdan oldin tahlil",
            "Mos texnologiyalarni tanlash",
            "Xavfsizlik va samaradorlik bo‘yicha tavsiyalar",
        ]
    }
];


function Service() {
    return (
        <div className="service w-full my-10 p-5 border-dotted border-[#1F1F1F] border rounded-2xl">
          <div className="mb-8 w-full bg-[#1A1A1A] p-6 sm:p-8 md:p-[50px] rounded-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9EFEC]">Xizmatlar</h2>
          </div>
    
          <div className="services w-full grid gap-6 grid-cols-1 md:grid-cols-2 ">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      );
    }
    
export default Service;
