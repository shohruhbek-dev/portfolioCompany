import React from 'react';
import logo from '../../assets/logocom.avif';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();
  const ChangeLng = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  };
  return (
    <div className="footer w-full bg-[#1A1A1A] text-white p-6 sm:p-8 md:p-10 rounded-2xl">
      <div className="bg-[#1A1A1A] text-white p-4 flex flex-col gap-4 sm:flex-row justify-between items-center rounded-2xl">
        <div className="cursor-pointer" onClick={() => {
          const target = document.getElementById('about');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <img src={logo} alt="logo" className='w-32 h-full' />
        </div>

        <div>
          <ul className="flex flex-row gap-4 sm:gap-6">
            <li className="bg-[#0F0F0F] px-[24px] py-[10px] rounded-[12px] text-white text-lg hover:bg-[#FF6600]">
              <a aria-label="Call +998950907050" target='_blank' href="tel:+998950907050">
                <i className="fa-solid fa-phone"></i>
              </a>
            </li>
            <li className="bg-[#0F0F0F] px-[24px] py-[10px] rounded-[12px] text-white text-lg hover:bg-[#FF6600]">
              <a aria-label="Visit our Instagram profile" target='_blank' href="https://www.instagram.com/xusanovv.m">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="bg-[#0F0F0F] px-[24px] py-[10px] rounded-[12px] text-white text-lg hover:bg-[#FF6600]">
              <a aria-label="Send us a message on Telegram" target='_blank' href="https://t.me/xusanovvm">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm sm:text-base mt-4">© 2025 {t("Barcha huquqlar himoyalangan")}</p>
    </div>
  );
}

export default Footer;
