import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id='contact' className="contact w-full my-20 py-10 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#1A1A1A] text-white rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="about-in2 bg-[#1A1A1A] rounded-[20px] font-medium flex flex-col gap-6 mb-4">
                    <h1 className='about-text text-white flex flex-col text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Why choose us?</h1>
                    <span className='flex flex-col gap-1'>
                        <h2 className='text-xl'>
                            <i className="fa-solid fa-eye mr-2"></i> Monitoring
                        </h2>
                        <p>Loyiha yakunlangach, 6 oy davomida bepul monitoring va texnik qo‘llab-quvvatlash taqdim etiladi.</p>
                    </span>
                    <span className='flex flex-col gap-1 '>
                        <h2 className='text-xl'>
                            <i className="fa-solid fa-shield-halved mr-2"></i> Himoya
                        </h2>
                        <p>Tizim xavfsizligi biz uchun ustuvor. Ma’lumotlaringiz himoyasi va platformangiz barqarorligi uchun zamonaviy xavfsizlik choralarini qo‘llaymiz.</p>
                    </span>
                    <span className='flex flex-col gap-1'>
                        <h2 className='text-xl'>
                            <i class="fa-solid fa-magnifying-glass-chart mr-2"></i> Raqobatchi tahlili
                        </h2>
                        <p>Loyihani boshlashdan avval sizning sohangizdagi raqobatchilarni chuqur tahlil qilamiz va shunga mos strategiyani ishlab chiqamiz — bu sizga bozorda ajralib turishga yordam beradi.</p>
                    </span>

                </div>

                <div className="contact-form flex flex-col gap-6 text-white">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-5xl font-medium text-white">Aloqa uchun</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Ismingiz"
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] focus:outline-none focus:border-[#FF6600] focus:text-[#81807E]"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Telefon raqamingiz"
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] focus:outline-none focus:border-[#FF6600] focus:text-[#81807E]"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Xabar"
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] focus:outline-none focus:border-[#FF6600] focus:text-[#81807E] min-h-[60px] md:min-h-[180px] xl:min-h-[60px]"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#FF6600] text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto"
                        >
                            Yuborish
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
