import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MailCheck, MapPinCheckInside, PhoneCall} from 'lucide-react';
import { FaXTwitter, FaGithub} from "react-icons/fa6";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_77pu3gd',    // Service ID
        'template_l3p5pkb',   // Template ID
        form.current,
        'uqFID7R1goEfiiDhw'     // API KEY 
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Try again.");
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 text-center overflow-x-hidden">
      <h2 className="text-3xl font-bold text-blue-900 lg:text-4xl mb-6">Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

        {/* Contact Info */}
        <div className="bg-green-800 lg:col-span-1 text-amber-200 rounded-2xl md:self-start space-y-2 px-3 md:mt-10 sm:px-4 md:px-4 ml-5 mr-5 sm:ml-20 sm:mr-20 md:ml-10 md:mr-10 lg:ml-10 lg:mr-5 text-left">

          {/* Encouraging contact message */}
          <div className="py-2 ml-3">
            <p className="mt-5 text-lg font-semibold md:mt-5 lg:mt-6 md:mb-2 md:text-2xl lg:text-2xl">
              Let’s Connect!
            </p>
            <p className="text-sm md:text-lg mt-4 text-amber-100 lg:text-lg">
              Whether you have a question, a project idea, or just want to say hi — feel free to reach out.
              I’m always happy to connect and collaborate!
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-green-900/20 p-3 rounded-md">
              <MailCheck className="w-5 h-5 md:w-8 md:h-8 text-green-500" />
            </div>
            <p className="text-sm md:text-lg lg:text-lg">omollofelix30@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-green-900/20 p-3 rounded-md">
              <MapPinCheckInside className="w-5 h-5 md:w-8 md:h-8 text-green-500" />
            </div>
            <p className="text-sm md:text-lg lg:text-lg">Nairobi, Kenya</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-green-900/20 p-3 rounded-md">
              <PhoneCall className="w-5 h-5 md:w-8 md:h-8 text-green-500" />
            </div>
            <p className="text-sm md:text-lg lg:text-lg">+254 759 629 059</p>
          </div>

          {/* Social media section */}
          <div className="pt-4 pb-5 md:pb-8">
            
            <div className="flex space-x-10 justify-center pb-2 mr-8">
              <a href="https://twitter.com/f_omolloh" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl sm:text-2xl md:text-4xl">
                  <FaXTwitter />
              </a>
              <a href="https://github.com/FelixOmollo" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl sm:text-2xl md:text-4xl">
              <FaGithub />
              </a>
            </div>

          </div>

        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="ml-5 mr-5 sm:ml-20 sm:mr-20 md:ml-10 md:mr-10 mt-10 bg-cyan-500 p-2 rounded-2xl shadow-3xl lg:text-lg lg:col-span-1 lg:ml-15 lg:mr-20">

          <div className="px-4 mt-6 text-left">
            <label className="block text-sm font-medium mb-2 md:text-lg lg:text-xl">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full border rounded p-2"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="px-4 mt-4 text-left">
            <label className="block text-sm font-medium md:text-lg mb-2 lg:text-xl">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full border rounded p-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="px-4 mt-4 text-left">
            <label className="block text-sm font-medium mb-2 md:text-lg lg:text-xl">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border rounded p-2"
              placeholder="Subject"
              required
            />
          </div>

          <div className="px-4 mt-4 text-left">
            <label className="block text-sm font-medium mb-2 md:text-lg lg:text-xl">Message</label>
            <textarea
              name="message"
              className="w-full border rounded p-2"
              rows={4}
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white lg:text-xl font-bold py-2 md:py-3 lg:py-3 px-6 sm:text-lg md:text-xl sm:mb-5 sm:w-3/4 mt-4 mb-2 rounded-b-4xl rounded-t-2xl"
          >
            Send Message
          </button>

          {/* Message status */}
          {status && <p className="text-white text-sm mt-2 md:text-lg lg:text-xl">{status}</p>}
        </form>
      </div>
    </section>
  );
}
