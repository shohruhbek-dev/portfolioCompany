import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can send formData to a backend or use email API
    };

    return (
        <section className="contact w-full my-20 py-15 p-6 bg-[#1A1A1A] text-white rounded-2xl">
            <div className="container mx-auto text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#F9EFEC]">Aloqa uchun</h2>
                <p className="mt-4 text-lg sm:text-xl text-[#B3B3B2]">
                    Biz bilan bog'lanish uchun quyidagi formani to'ldiring, biz sizga tez orada javob beramiz.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-12">

                <div>


                    <div className="project-contactp-8 rounded-2xl">
                        <h3 className="text-xl sm:text-3xl font-semibold ">
                            Sizning g'oyalaringizni tinglashni va ularni muvaffaqiyatli amalga oshirishda yordam berishni istaymiz        </h3>
                        <p className="mt-4 text-lg  text-[#B3B3B2]">
                            Biz bilan bog'lanish uchun shaklni to'ldiring yoki quyidagi kontakt ma'lumotlaridan foydalaning.        </p>
                        <div className="flex flex-col gap-8 mt-8">
                            <div className="flex items-center gap-4 text-[#CE7D63]">
                                <i className="fa-solid fa-envelope text-2xl" />
                                <span>texelcode@texelcode.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#CE7D63]">
                                <i className="fa-solid fa-phone text-2xl" />
                                <span>+998 (99) 123-45-67</span>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="contact-form flex flex-col gap-6 text-white">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-[#F9EFEC]">Bizga yozing</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Ismingiz"
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] focus:outline-none focus:border-b-2 focus:border-[#FF6600] focus:text-[#81807E]"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Telefon raqamingiz"
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] focus:outline-none focus:border-b-2 focus:border-[#FF6600] focus:text-[#81807E]"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Xabar"
                            rows="5"
                            className="p-4 rounded-lg text-[#81807E] placeholder-[#81807E] border-b-2 border-[#81807E] focus:outline-none focus:border-b-2 focus:border-[#FF6600] focus:text-[#81807E]"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#CE7D63] text-white py-3 px-6 rounded-lg hover:bg-[#CE7D63] transition duration-300"
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
