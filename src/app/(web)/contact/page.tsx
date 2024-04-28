'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import { MdEmail, MdPerson, MdPhone } from "react-icons/md";
import {useRouter} from 'next/navigation';
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa6";

const defaultFormData = {
  email: '',
  phone: '',
  name: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles = "border border-gray-300 sm:text-sm text-black rounded-lg block w-[500px] p-2.5 mx-2 focus:outline-none";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        toast.success('Success. We will be in touch');
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    } finally {
        setFormData(defaultFormData);
    }
};
    return (
      <section className="container mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Get in Touch</h1>
            <p>Send us an email and we'll be happy to get back to you.</p>
            <form className="space-y-4 md:space-y-6 mx-auto ml-3" onSubmit={handleSubmit}>
              <div className="inline-flex items-center">
                  <label htmlFor="frm-email" className="w-[75px]"><MdEmail />Email</label>
                  <input id="frm-email" type="email" name="email" className={inputStyles} onChange={handleInputChange} value={formData.email} autoComplete="email" required />
              </div>
              <div className="inline-flex items-center">
                  <label htmlFor="frm-phone" className="w-[75px]"><MdPhone />Phone</label>
                  <input id="frm-phone" type="text" name="phone" autoComplete="tel" className={inputStyles} onChange={handleInputChange} required />
              </div>
              <div className="inline-flex items-center">
                  <label htmlFor="frm-last" className="w-[75px]"><MdPerson />Name</label>
                  <input id="frm-last" type="text" name="name" autoComplete="last-name" className={inputStyles} onChange={handleInputChange} required />
              </div>

              <div className="inline-flex items-center">
                  <label htmlFor="frm-message"><FaPaperPlane /> Message</label>
                  <textarea id="frm-message" className={inputStyles} rows={6} name="message"></textarea>
              </div>
              <div className="button block">
                <button type="submit" className="btn-primary">Submit</button>
              </div>
           </form>
        </div>
      </section>
    )
};

export default Contact;