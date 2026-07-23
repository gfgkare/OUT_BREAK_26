import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative bg-[#0d1117] pt-16 pb-8 border-t border-white/5 font-sans">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">

                    {/* Column 1: Brand (4 cols) */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6 scroll-smooth">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1">
                                <img src="/gfg.jpeg" alt="GFG Logo" className="w-full h-full object-contain" />
                            </div>

                            {/* Chemical Title: [O]ut [Br]eak'26 */}
                            {/* Chemical Title: Stacked [O]ut [Br]eak */}
                            <div className="flex flex-col justify-center -space-y-px">
                                {/* Row 1: [O]ut */}
                                <div className="flex items-center gap-1">
                                    <div className="w-6 h-6 bg-[#1a4d2e] relative flex flex-col justify-center items-center p-0.5 border border-white/20">
                                        <span className="absolute top-0 right-0.5 text-[5px] font-bold text-white font-serif opacity-80">8</span>
                                        <span className="text-xs font-bold text-white font-serif leading-none">O</span>
                                    </div>
                                    <span className="text-xs font-bold font-serif text-white tracking-tight leading-none mb-0.5">ut</span>
                                </div>

                                {/* Row 2: [Br]eak'26 */}
                                <div className="flex items-center gap-1 pl-6">
                                    <div className="w-6 h-6 bg-[#1a4d2e] relative flex flex-col justify-center items-center p-0.5 border border-white/20">
                                        <span className="absolute top-0 right-0.5 text-[5px] font-bold text-white font-serif opacity-80">35</span>
                                        <span className="text-xs font-bold text-white font-serif leading-none">Br</span>
                                    </div>
                                    <span className="text-xs font-bold font-serif text-white tracking-tight leading-none mb-0.5">eak'26</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Break The Code, Cook Ideas, Break Limits.
                        </p>
                    </div>

                    {/* Column 2: Student Coordinators (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-base mb-6">Student Coordinators</h4>
                        <div className="space-y-3">
                            <CoordinatorRow name="L Harsha Vardhan" phone="+91 91005 50609" />
                            <CoordinatorRow name="Sushmitha N" phone="+91 86882 05314" />
                            <CoordinatorRow name="P Harshika Suryanjali" phone="+91 95027 95304" />
                        </div>
                    </div>

                    {/* Column 3: Faculty Coordinators (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-base mb-6">Faculty Coordinators</h4>
                        <div className="space-y-4 text-sm text-gray-400">
                            <div>
                                <span className="block text-gray-200 font-medium">Dr. R. Raja Sekar</span>
                                <span className="text-xs opacity-70">Associate Professor / CSE</span>
                            </div>
                            <div>
                                <span className="block text-gray-200 font-medium">Mrs. S. Shanmuga Priya</span>
                                <span className="text-xs opacity-70">Assistant Professor / CSE</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Connect (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold text-base mb-6">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            <SocialLink icon={<Instagram size={18} />} href="https://www.instagram.com/gfg_campus_body_kare/" hoverClass="hover:text-[#E4405F]" />
                            <SocialLink icon={<Linkedin size={18} />} href="https://www.linkedin.com/company/gfg-kare-student-chapter/" hoverClass="hover:text-[#0A66C2]" />
                            <SocialLink icon={<Mail size={18} />} href="mailto:kare.campus@gfg.org" hoverClass="hover:text-[#EA4335]" />
                            <SocialLink icon={<img src="/favicon.png" alt="GFG" className="w-5 h-5 object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" />} href="https://gfgkare.in/" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">
                        © {new Date().getFullYear()} GFG CAMPUS BODY KARE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.3em]">
                        <span>Developed by  </span>
                        <span className="font-mono">2025-26 BATCH</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const CoordinatorRow = ({ name, phone }) => (
    <div className="flex justify-between items-center text-sm text-gray-400 w-full max-w-xs md:max-w-none">
        <span>{name}</span>
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-500 hover:text-neon-green transition-colors text-xs tabular-nums">
            {phone}
        </a>
    </div>
);

const SocialLink = ({ icon, href, hoverClass = "" }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/10 ${hoverClass}`}
    >
        {icon}
    </a>
);
