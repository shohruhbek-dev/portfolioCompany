import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const { t, i18n } = useTranslation();
    const ChangeLng = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("i18nextLng", selectedLanguage);
    };

    const [loading, setLoading] = useState(false)
    const SendMessage = (e) => {
        setLoading(true)
        e.preventDefault();
        const token = '6205773676:AAFwXXQzGi8jmdR0nP4JkKlkSG_x8rZEXnk'
        const chatId = 1337108345
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const message = document.getElementById('message').value
        const messageContent = `Ism: ${name} \nTelefon: ${phone} \nXabar: ${message}`
        axios({
            url: url,
            method: 'POST',
            data: {
                "chat_id": chatId,
                "text": messageContent,
            }
        }).then((res) => {
            document.getElementById('myForm').reset()
            setFormData({ name: '', phone: '', message: '' })
            toast.success(t("Xabaringiz yuborildi!"))
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <section id='contact' className="contact w-full my-20 py-10 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#1A1A1A] text-white rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="about-in2 bg-[#1A1A1A] rounded-[20px] font-medium flex flex-col gap-6 mb-4">
                    <h1 className='about-text text-white flex flex-col text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>{t("Nega aynan biz?")}</h1>
                    <span className='flex flex-col gap-1'>
                        <h2 className='text-xl'>
                            <i className="fa-solid fa-eye mr-2"></i> {t("Monitoring")}
                        </h2>
                        <p>{t("Loyiha yakunlangach, 6 oy davomida bepul monitoring va texnik qo‘llab-quvvatlash taqdim etiladi.")}</p>
                    </span>
                    <span className='flex flex-col gap-1 '>
                        <h2 className='text-xl'>
                            <i className="fa-solid fa-shield-halved mr-2"></i> {t("Himoya")}
                        </h2>
                        <p>{t("Tizim xavfsizligi biz uchun ustuvor. Ma’lumotlaringiz himoyasi va platformangiz barqarorligi uchun zamonaviy xavfsizlik choralarini qo‘llaymiz.")}</p>
                    </span>
                    <span className='flex flex-col gap-1'>
                        <h2 className='text-xl'>
                            <i class="fa-solid fa-magnifying-glass-chart mr-2"></i> {t("Raqobatchi tahlili")}
                        </h2>
                        <p>{t("Loyihani boshlashdan avval sizning sohangizdagi raqobatchilarni chuqur tahlil qilamiz va shunga mos strategiyani ishlab chiqamiz — bu sizga bozorda ajralib turishga yordam beradi.")}</p>
                    </span>

                </div>

                <div className="contact-form flex flex-col gap-6 text-white">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-5xl font-medium text-white max-md:text-center">{t("Aloqa uchun")}</h2>
                    <form
                        id='myForm'
                        onSubmit={SendMessage}
                        className="flex flex-col gap-4">
                        <input
                            id='name'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={t("Ismingiz")}
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] outline-none focus:border-[#FF6600] focus:text-[#81807E]"
                            required
                        />
                        <input
                            id='phone'
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t("Telefon raqamingiz")}
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] outline-none focus:border-[#FF6600] focus:text-[#81807E]"
                            required
                        />
                        <textarea
                            id='message'
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={t("Xabar")}
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] focus:outline-none focus:border-[#FF6600] focus:text-[#81807E] min-h-[60px] md:min-h-[180px] xl:min-h-[60px] outline-none"
                            required
                        />
                        <button
                            loading={loading}
                            type="submit"
                            className="bg-[#FF6600] text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto"
                        >
                            {loading ? t("Yuborilmoqda...") : t("Yuborish")}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
