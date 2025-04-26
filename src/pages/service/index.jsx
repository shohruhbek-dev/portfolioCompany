import React from 'react';
import ServiceCard from '../../components/cards/serviceCard';
import {
    faLaptopCode,
    faRobot,
    faLightbulb,
    faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Service() {
    const { t, i18n } = useTranslation();
    const ChangeLng = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("i18nextLng", selectedLanguage);
    };
    const services = [
        {
            icon: faLaptopCode,
            serviceType: t("Veb rivojlantirish"),
            serviceDescription: t("Biz sizning brendingiz va maqsadlaringizga mos zamonaviy veb-saytlar yaratamiz."),
            moreDescriptions: [
                t("SEO-ga moslashtirilgan saytlar"),
                t("Interaktiv interfeys va foydalanuvchi tajribasi"),
                t("Kontentni boshqarish tizimi integratsiyasi"),
            ]
        },
        {
            icon: faRobot,
            serviceType: t("Telegram botlar"),
            serviceDescription: t("Telegram botlar orqali avtomatlashtirilgan va qulay xizmat ko‘rsatish tizimlarini yaratamiz."),
            moreDescriptions: [
                t("Buyurtmalar va so‘rovlarni boshqarish"),
                t("To‘lov tizimlari bilan integratsiya"),
                t("Avtomatik xabarlar va foydalanuvchi javoblari"),
            ]
        },
        {
            icon: faMobileScreenButton,
            serviceType: t("E-commerce (internet do'kon)"),
            serviceDescription: t("Biznesingiz uchun samarali, funksional va foydalanuvchiga qulay internet do‘koni."),
            moreDescriptions: [
                t("Mahsulotlar katalogi va qidiruv tizimi"),
                t("Onlayn to‘lov va yetkazib berish integratsiyasi"),
                t("Xaridlar tarixi va foydalanuvchi profili"),
            ]
        },
        {
            icon: faLightbulb,
            serviceType: t("Onlayn o'quv platformalari"),
            serviceDescription: t("Zamonaviy, qulay va interaktiv onlayn ta’lim tizimlarini yaratamiz."),
            moreDescriptions: [
                t("Moslashtirilgan kurslar va darslar tizimi"),
                t("Video va rasm formatidagi darsliklar"),
                t("Reyting, test va yutuqlarni kuzatish imkoniyati"),
            ]
        }
    ];

    return (
        <div id='service' className="service w-full my-10 rounded-2xl">
            <div className="mb-8 w-full bg-[#1A1A1A] p-2 sm:p-4 lg:p-5 rounded-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-[#F9EFEC]">{t("Xizmatlar")}</h2>
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
