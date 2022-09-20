import { useRef } from "react";
import { contact } from "../../data";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mqvn7sp",
        "template_kkmf9dg",
        form.current,
        "C53HOaW0amerLdEcD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="my-14 scroll-mt-10">
      <div className="container mx-auto">
        <div className="title text-center">
          <p className="text-dark text-base">Get In Touch</p>
          <h3 className="text-2xl font-medium text-white">Contact Me</h3>
        </div>
        <div className="mt-11 flex flex-wrap justify-center gap-y-8 md:flex-nowrap md:gap-x-10">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:basis-1/4">
            {contact.map(({ vektor, info, desc, link }, index) => {
              return (
                <div
                  className="basis-10/12 rounded-md bg-slate-800 p-6 text-center md:basis-full"
                  key={index}
                >
                  <span className="mx-auto inline-block text-2xl text-white">
                    {vektor}
                  </span>
                  <h5 className="mt-2 text-base text-white">{info}</h5>
                  <p className="text-sm text-slate-50">{desc}</p>
                  <a
                    className="text-dark mt-3 block text-sm hover:text-slate-300"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Send a message
                  </a>
                </div>
              );
            })}
          </div>
          <div className="lg:basis-2/5">
            <form
              className="flex flex-wrap justify-center gap-y-5 lg:gap-y-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="border-dark basis-10/12 rounded-md bg-transparent py-3 px-4 text-white placeholder:text-sm placeholder:text-slate-500 md:basis-full"
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                className="border-dark basis-10/12 rounded-md bg-transparent py-3 px-4 text-white placeholder:text-sm placeholder:text-slate-500 md:basis-full"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                className="border-dark basis-10/12 rounded-md bg-transparent py-3 px-4 text-white placeholder:text-sm placeholder:text-slate-500 md:basis-full"
                name="message"
                rows="7"
                placeholder="Your Message"
              ></textarea>
              <button
                className="rounded-md border border-slate-800 bg-slate-800 py-3 px-6 text-sm font-medium text-white shadow-3xl md:mr-auto lg:text-xs"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
