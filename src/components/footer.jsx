import { footerLinks } from "../constants/index.js";
import { FaLinkedin, FaBehanceSquare, FaGithub, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bottom-0 w-full border-t border-white/10 bg-black px-5 py-10 text-white sm:px-8 lg:px-12">
            <div className="mx-auto w-full">
               <div className="flex space-x-5 justify-center leading-tight social-icons">
                               
                               <FaLinkedin className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-red-500 p-2 text-2xl text-red-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:scale-120 transition-transform duration-300" />
                               <FaBehanceSquare className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-red-500 p-2 text-2xl text-red-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:scale-120 transition-transform duration-300" />
                               <FaGithub className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-red-500 p-2 text-2xl text-red-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:scale-120 transition-transform duration-300" />
                               <a href="tel:08030579725"><FaPhone className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-red-500 p-2 text-2xl text-red-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:scale-120 transition-transform duration-300" /></a>
                                
                               </div>
                               <div className="flex flex-col justify-center pt-5 text-center text-red-600">
                                <p>© {new Date().getFullYear()} Oluwaseyi Awoderu. All rights reserved.</p>
                               <a href="mailto:awoderuoseyi@gmail.com" className="transition-colors hover:text-white">
                                    Let&apos;s work together
                               </a>
                               </div>
                               

                {/* <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/40 justify-center sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Oluwaseyi Awoderu. All rights reserved.</p>
                    <a href="mailto:awoderuoseyi@gmail.com" className="transition-colors hover:text-white">
                        Let&apos;s work together
                    </a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;