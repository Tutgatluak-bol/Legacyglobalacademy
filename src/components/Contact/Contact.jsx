import { useState } from "react";
import { motion } from "framer-motion";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const containerClass = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const sectionLabel =
  "inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary";

const inputClasses =
  "mt-2 mb-5 block w-full rounded-[6px] border border-[#e2e7f0] bg-[#f8fafc] px-4 py-3.5 text-[0.95rem] text-brand-dark outline-none transition-all duration-200 focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/20";

const buttonBase =
  "inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[6px] border border-transparent px-[26px] py-3 text-[0.9rem] font-bold transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 motion-reduce:transition-none";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "1b0bfca3-a8e7-44c7-8697-6890581a0483"
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Email Send Successfully");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <main className="overflow-hidden bg-white text-brand-dark selection:bg-brand-sky/30 py-24 max-lg:py-16 max-sm:py-12">
      <div className={`${containerClass} grid grid-cols-[1fr_1.1fr] items-start gap-[clamp(40px,7vw,88px)] max-lg:grid-cols-1 max-lg:gap-12`}>
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          <span className={sectionLabel}>
            GET IN TOUCH
          </span>

          <h2 className="mt-3 text-[clamp(2.2rem,4.2vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-brand-dark flex items-center gap-3">
            Send us a message
            <img
              src={msg_icon}
              alt=""
              className="w-8 h-8 shrink-0 object-contain"
            />
          </h2>

          <p className="mt-4 text-[1rem] leading-[1.85] text-[#596278]">
            We would love to hear from you. Whether you have questions about our
            school, academic programs, admissions, or other inquiries, please
            send us a message. Our team will be happy to assist you.
          </p>

          <ul className="mt-8 list-none p-0 space-y-6 border-t border-[#e2e7f0] pt-8">
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-[#f0f4f9]">
                <img
                  src={mail_icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
              </span>
              <span className="break-words font-medium text-[0.95rem] text-brand-dark">
                Legacyglobalacademy@gmail.com
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-[#f0f4f9]">
                <img
                  src={phone_icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
              </span>
              <span className="font-medium text-[0.95rem] text-brand-dark">
                +211 920 000 000
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-[#f0f4f9]">
                <img
                  src={location_icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
              </span>
              <span className="font-medium text-[0.95rem] text-brand-dark">
                South Sudan, Sherikat - Highland
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="min-w-0 bg-[#f8fafc] p-8 rounded-[12px] border border-[#e2e7f0] shadow-sm max-sm:p-6"
        >
          <form onSubmit={onSubmit}>
            <label htmlFor="contact-name" className="block text-xs font-extrabold uppercase tracking-[0.1em] text-brand-dark">
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className={inputClasses}
            />

            <label htmlFor="contact-phone" className="block text-xs font-extrabold uppercase tracking-[0.1em] text-brand-dark">
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
              className={inputClasses}
            />

            <label htmlFor="contact-message" className="block text-xs font-extrabold uppercase tracking-[0.1em] text-brand-dark">
              Write your message here
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              required
              className={`${inputClasses} resize-none`}
            />

            <button
              type="submit"
              className={`${buttonBase} bg-brand-dark text-white hover:bg-brand-primary w-full shadow-sm`}
            >
              Submit Now
              <img
                src={white_arrow}
                alt=""
                className="w-4 h-4 shrink-0 object-contain"
              />
            </button>
          </form>

          <span
            role="status"
            aria-live="polite"
            className="mt-4 block text-center text-sm font-semibold text-brand-primary"
          >
            {result}
          </span>
        </motion.div>

      </div>
    </main>
  );
};

export default Contact;