"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import Link from "next/link";
import nodely from "../../../public/curiso-header.png";
import nodelyAI from "../../../public/curiso-screen.png";
import Image from "next/image";
import openAI from "../../../public/openai.svg";
import anthropic from "../../../public/anthropic.svg";
import gemini from "../../../public/google-logo.svg";
import openRouter from "../../../public/openrouter.svg";
import XAi from "../../../public/xai.svg";
import groq from "../../../public/groq.svg";
import ollama from "../../../public/ollama-logo.svg";
import LmStudio from "../../../public/lmstudio.png";
import Jan from "../../../public/jan.svg";
import exo from "../../../public/exo.png";
import vllm from "../../../public/vllm.svg";
import logo from "../../../public/logo.svg";
import mainLogo from "../../../public/nodely.png";
import icon from "../../../public/icon.png";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#111] backdrop-blur-sm z-50 border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <img
              src="https://i.ibb.co.com/qFPYHNDw/nodely.png"
              alt="nodely"
              className="h-32"
            />

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-[#D8C794] transition-colors"
              >
                Features
              </a>
              <a
                href="#getting-started"
                className="hover:text-[#D8C794] transition-colors"
              >
                Get Started
              </a>
              <a
                href="#token"
                className="hover:text-[#D8C794] transition-colors"
              >
                Token
              </a>
              <a
                href="#documentation"
                className="hover:text-[#D8C794] transition-colors"
              >
                Docs
              </a>
              <a
                href="https://github.com/metaspartan/nodely"
                className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero section */}
        <div className="relative flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-[#09090B]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] animate-grid opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(205_65%_35%)]/20 to-[hsl(183_31%_26%)]/20"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-8">
                <img
                  src="https://i.ibb.co.com/S4FymJhx/icon.png"
                  alt="icon"
                  className="h-[150px] w-[150px]"
                />
              </div>
              <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#263e80] to-[#6a55e0] text-transparent bg-clip-text z-50">
                INFINITE CANVAS FOR YOUR THOUGHTS
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Connect nodes and AI services to explore ideas in depth. Unlock
                richer, more accurate AI interactions with advanced guidance
                capabilities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="#getting-started"
                  className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles h-5 w-5"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                  </svg>
                  <span>Get Started</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/metaspartan/nodely"
                  className="flex items-center space-x-2 bg-[#171717] hover:bg-[#202020] px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
                >
                  <span>View on GitHub</span>
                </a>
              </div>
              <div className="relative w-full"></div>
            </div>
          </div>
        </div>
        {/* Hero section end*/}
        {/* Powerful Features */}
        <section
          id="features"
          className="py-24 bg-[#111] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] animate-grid opacity-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6a55e0] to-[#263e80] text-transparent bg-clip-text">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to enhance your AI interactions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-monitor h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                      <line x1="8" x2="16" y1="21" y2="21"></line>
                      <line x1="12" x2="12" y1="17" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      Multi OS Support
                    </h3>
                    <p className="text-gray-400">
                      Available for Windows, macOS, and Linux platforms
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-maximize2 h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" x2="14" y1="3" y2="10"></line>
                      <line x1="3" x2="10" y1="21" y2="14"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      Infinite Canvas
                    </h3>
                    <p className="text-gray-400">
                      Create and organize thoughts visually on an unlimited
                      workspace
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-brain h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                      <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                      <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                      <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      Multiple AI Providers
                    </h3>
                    <p className="text-gray-400">
                      Integration with leading AI services and local inference
                      options
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-cpu h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <path d="M15 2v2"></path>
                      <path d="M15 20v2"></path>
                      <path d="M2 15h2"></path>
                      <path d="M2 9h2"></path>
                      <path d="M20 15h2"></path>
                      <path d="M20 9h2"></path>
                      <path d="M9 2v2"></path>
                      <path d="M9 20v2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      Local AI Inference
                    </h3>
                    <p className="text-gray-400">
                      Support for Ollama, Exo, Jan.ai, LM Studio, vLLM, and more
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-database h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      RAG Support
                    </h3>
                    <p className="text-gray-400">
                      Add and configure RAG documents and websites locally
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-lock h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      Secure Storage
                    </h3>
                    <p className="text-gray-400">
                      Local encrypted storage of API keys and sensitive data
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-network h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                      <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                      <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                      <path d="M12 12V8"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      Node System
                    </h3>
                    <p className="text-gray-400">
                      Share context between connected nodes and AI services
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-boxes h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                      <path d="m7 16.5-4.74-2.85"></path>
                      <path d="m7 16.5 5-3"></path>
                      <path d="M7 16.5v5.17"></path>
                      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                      <path d="m17 16.5-5-3"></path>
                      <path d="m17 16.5 4.74-2.85"></path>
                      <path d="M17 16.5v5.17"></path>
                      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                      <path d="M12 8 7.26 5.15"></path>
                      <path d="m12 8 4.74-2.85"></path>
                      <path d="M12 13.5V8"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      Embedding Models
                    </h3>
                    <p className="text-gray-400">
                      Support for local transformers.js embedding models and
                      OpenAI
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-[#161616]/50 backdrop-blur-sm rounded-xl hover:bg-[#161616] transition-all duration-300 hover:scale-105 border border-gray-800/50 hover:border-[#D8C794]/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#17312C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#17312C]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-palette h-6 w-6 text-[#D8C794] group-hover:scale-110 transition-transform"
                    >
                      <circle
                        cx="13.5"
                        cy="6.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="17.5"
                        cy="10.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="8.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="6.5"
                        cy="12.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#D8C794] transition-colors">
                      Customization
                    </h3>
                    <p className="text-gray-400">
                      Customize your setup with themes, models, and more
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-40">
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-800">
                Supported AI LLM Providers
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-12 items-center justify-items-center">
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={openAI}
                    alt="OpenAI"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      OpenAI
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={anthropic}
                    alt="Anthropic"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      Anthropic
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={gemini}
                    alt="Google AI"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      Google AI
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={openRouter}
                    alt="OpenRouter"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      OpenRouter
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={XAi}
                    alt="xAI"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      xAI
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={groq}
                    alt="Groq"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      Groq
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={ollama}
                    alt="Ollama"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      Ollama
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <img
                    src="https://i.ibb.co.com/B2vbMkKj/lmstudio.png"
                    alt="lmstudio"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      LM Studio
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={Jan}
                    alt="Jan.ai"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      Jan.ai
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <img
                    src="https://i.ibb.co.com/TqcgzS6x/exo.png"
                    alt="exo"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      Exo
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src={vllm}
                    alt="vLLM"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      vLLM
                    </span>
                  </div>
                </div>
                <div className="group relative w-[100px] h-[100px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#161616] rounded-lg group-hover:bg-[#17312C]/20 transition-colors"></div>
                  <Image
                    src="https://i.ibb.co.com/S4FymJhx/icon.png"
                    alt="icon"
                    className="w-[75px] h-[75px] object-contain relative z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      Others
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Powerful Features end*/}
        {/* Developer section*/}
        <section
          id="getting-started"
          className="py-24 bg-[#060607] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] animate-grid opacity-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6a55e0] to-[#263e80] text-transparent bg-clip-text">
                Get Started
              </h2>
              <p className="text-xl text-gray-400">
                Quick setup guide to get you up and running
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-12 items-start">
              <div className="bg-[#161616]/50 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">For Developers</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github h-6 w-6 text-gray-400"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex flex-wrap items-start gap-1 text-sm text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 text-[#17312C] flex-shrink-0 mt-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span>Written in Typescript,</span>
                    <span>
                      Requires{" "}
                      <a
                        href="https://bun.sh"
                        className="text-[#D8C794] hover:underline"
                      >
                        Bun runtime
                      </a>
                      ,
                    </span>
                    <span>
                      Requires{" "}
                      <a
                        href="https://www.rust-lang.org/tools/install"
                        className="text-[#D8C794] hover:underline"
                      >
                        Rust
                      </a>
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start gap-1 text-sm text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 text-[#17312C] flex-shrink-0 mt-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span>
                      Requires{" "}
                      <a
                        href="https://tauri.app"
                        className="text-[#D8C794] hover:underline"
                      >
                        Tauri CLI
                      </a>
                    </span>
                    <span>
                      (
                      <code className="break-all">cargo install tauri-cli</code>
                      )
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start gap-1 text-sm text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 text-[#17312C] flex-shrink-0 mt-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <span>API keys for AI services and/or local LLM</span>
                  </div>
                </div>
                <div className="bg-[#111] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-terminal h-4 w-4 text-[#D8C794]"
                    >
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" x2="20" y1="19" y2="19"></line>
                    </svg>
                    <span className="text-gray-400">Quick Dev Setup</span>
                  </div>
                  <div className="space-y-2">
                    <code className="block text-[#D8C794] whitespace-pre-wrap break-all">
                      Install Rust, Bun, and Tauri CLI
                    </code>
                    <code className="block text-[#D8C794] whitespace-pre-wrap break-all">
                      --------------------------------
                    </code>
                    <code className="block text-[#D8C794] whitespace-pre-wrap break-all">
                      git clone https://github.com/metaspartan/nodely.git
                    </code>
                    <code className="block text-[#D8C794] whitespace-pre-wrap break-all">
                      cd nodely
                    </code>
                    <code className="block text-[#D8C794] whitespace-pre-wrap break-all">
                      bun install &amp;&amp; bun run desktop
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Developer section end*/}
        {/* nodely token*/}
        <section
          id="token"
          className="py-24 bg-[#09090B] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] animate-grid opacity-60"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6a55e0] to-[#263e80] text-transparent bg-clip-text">
                nodely Token (NODY)
              </h2>
              <p className="text-xl text-gray-400">
                Open source AI platform on Solana
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="md:col-span-3 group bg-[#161616]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#D8C794]/30 transition-all hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Contract Address</h3>
              </div>
              <div className="group bg-[#161616]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#D8C794]/30 transition-all hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  <path d="M5 3v4"></path>
                  <path d="M19 17v4"></path>
                  <path d="M3 5h4"></path>
                  <path d="M17 19h4"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Trade NODY</h3>
                <a
                  href="https://dexscreener.com/solana/8TbsZ3yH1mBHytVpmMn4qED2UeF3FgWUVt1pd5RBpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#D8C794] hover:text-white transition-colors"
                >
                  <span>View on DexScreener</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link h-4 w-4"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="group bg-[#161616]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#D8C794]/30 transition-all hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-coins h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                >
                  <circle cx="8" cy="8" r="6"></circle>
                  <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                  <path d="M7 6h1v4"></path>
                  <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Total Supply</h3>
                <p className="text-gray-400">1,000,000,000 NODY</p>
              </div>
              <div className="group bg-[#161616]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#D8C794]/30 transition-all hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">
                  Tiered Premium Subscription
                </h3>
                <p className="text-gray-400">
                  Access to premium subscriptions (coming soon)
                </p>
              </div>
            </div>
            <div className="mb-16">
              <div className="bg-[#161616]/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-center mb-8">
                  Token &amp; Platform Roadmap
                </h3>
                <p className="text-gray-400 text-center mb-12">
                  Q1-Q3 2025 Goals
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group bg-[#17312C]/20 p-6 rounded-xl border border-[#D8C794]/30 hover:bg-[#17312C]/30 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-wallet h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                    </svg>
                    <h4 className="text-xl font-semibold mb-2 text-[#D8C794]">
                      Subscription Payments
                    </h4>
                    <p className="text-gray-400">
                      NODY will be integrated as the main payment method for
                      premium subscriptions, making it a utility token on
                      Solana.
                    </p>
                  </div>
                  <div className="group bg-[#17312C]/20 p-6 rounded-xl border border-[#D8C794]/30 hover:bg-[#17312C]/30 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    <h4 className="text-xl font-semibold mb-2 text-[#D8C794]">
                      Stable Sub NODY Pricing
                    </h4>
                    <p className="text-gray-400">
                      Integration with the Pyth network to ensure stable USD
                      pricing for subscriptions.
                    </p>
                  </div>
                  <div className="group bg-[#17312C]/20 p-6 rounded-xl border border-[#D8C794]/30 hover:bg-[#17312C]/30 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-flame h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                    >
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                    <h4 className="text-xl font-semibold mb-2 text-[#D8C794]">
                      Token Burn Mechanism
                    </h4>
                    <p className="text-gray-400">
                      A portion of NODY used in subscription payments will be
                      burned, supporting long-term value.
                    </p>
                  </div>
                  <div className="group bg-[#17312C]/20 p-6 rounded-xl border border-[#D8C794]/30 hover:bg-[#17312C]/30 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-lock h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <h4 className="text-xl font-semibold mb-2 text-[#D8C794]">
                      NODY Lock Staking Pools
                    </h4>
                    <p className="text-gray-400">
                      Staking pool program where NODY holders can earn rewards,
                      funded by subscription revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className="bg-[#161616]/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h4 className="text-2xl font-semibold text-center mb-8 text-blue-800">
                  Legal Disclaimer
                </h4>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-400 mb-6">
                    The NODY token (&ldquo;NODY&rdquo;) is an experimental
                    cryptocurrency token on the Solana blockchain intended for
                    future utility within the nodely AI platform.
                  </p>
                  <p className="text-gray-300 font-semibold mb-4">
                    IMPORTANT NOTICE: Trading, holding, or engaging with
                    cryptocurrency tokens carries inherent risks. By interacting
                    with the NODY token, users acknowledge and agree that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
                    <li>
                      No guarantees or warranties are made regarding current or
                      future token utility, value, or platform integration
                    </li>
                    <li>
                      All cryptocurrency transactions involve substantial risk
                      of loss
                    </li>
                    <li>
                      Neither nodely AI nor its developers or contributors shall
                      be held liable for any damages or losses arising from
                      token-related activities
                    </li>
                    <li>
                      No information provided constitutes financial, legal, or
                      investment advice
                    </li>
                    <li>
                      Future utility features and platform integration are
                      subject to change without notice
                    </li>
                    <li>
                      Users are solely responsible for conducting due diligence
                      and complying with applicable laws and regulations
                    </li>
                  </ul>
                  <p className="text-gray-400 text-sm">
                    THIS SOFTWARE AND ASSOCIATED TOKEN ARE PROVIDED &ldquo;AS
                    IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
                    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
                    FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
                    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF
                    OR IN CONNECTION WITH THE TOKEN OR ITS USE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* nodely token end*/}
        {/* Documentation*/}
        <section
          id="documentation"
          className="py-24 bg-[#09090B] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] animate-grid opacity-60"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6a55e0] to-[#263e80] text-transparent bg-clip-text">
                Documentation
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about nodely
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="group bg-[#111]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#D8C794]/30 transition-all hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-network h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                >
                  <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                  <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                  <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                  <path d="M12 12V8"></path>
                </svg>
                <h3 class="text-xl font-semibold mb-2 group-hover:text-[#D8C794] transition-colors">
                  Node System
                </h3>
                <p class="text-gray-400 mb-4">
                  Learn how to create, connect, and manage nodes to build
                  powerful AI workflows.
                </p>
                <a
                  href="https://github.com/metaspartan/nodely/wiki/nodes"
                  class="text-[#D8C794] hover:text-[#17312C] inline-flex items-center space-x-1 transition-colors"
                >
                  <span>View guide</span>
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="group bg-[#111]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#D8C794]/30 transition-all hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-git-pull-request h-8 w-8 text-[#D8C794] mb-4 group-hover:scale-110 transition-transform"
                >
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                  <line x1="6" x2="6" y1="9" y2="21"></line>
                </svg>
                <h3 class="text-xl font-semibold mb-2 group-hover:text-[#D8C794] transition-colors">
                  Contributing
                </h3>
                <p class="text-gray-400 mb-4">
                  Guidelines for contributing to nodely&apos;s development.
                </p>
                <a
                  href="https://github.com/metaspartan/nodely/blob/main/CONTRIBUTING.md"
                  class="text-[#D8C794] hover:text-[#17312C] inline-flex items-center space-x-1 transition-colors"
                >
                  <span>Get involved</span>
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Documentation end*/}
        {/* open source*/}
        <section className="py-24 bg-[#111] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] animate-grid opacity-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6a55e0] to-[#263e80] text-transparent bg-clip-text">
                Open Source
              </h2>
              <p className="text-xl text-gray-400">
                Join our community on GitHub
              </p>
            </div>
            <div className="bg-[#161616]/50 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-800">
              <div className="flex justify-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github h-16 w-16 text-[#D8C794]"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">nodely on GitHub</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                nodely is open source and available under the MIT license. Star
                us on GitHub to show your support and stay updated with the
                latest developments.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="https://github.com/metaspartan/nodely"
                  className="group relative flex items-center space-x-2 px-6 py-3 rounded-lg transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D8C794] to-[#17312C] rounded-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star h-5 w-5 text-[#D8C794] relative z-10"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="relative z-10">Star on GitHub</span>
                </a>
                <a
                  href="https://github.com/metaspartan/nodely/fork"
                  className="group relative flex items-center space-x-2 px-6 py-3 rounded-lg transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D8C794] to-[#17312C] rounded-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-git-fork h-5 w-5 text-[#D8C794] relative z-10"
                  >
                    <circle cx="12" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="18" cy="6" r="3"></circle>
                    <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                    <path d="M12 12v3"></path>
                  </svg>
                  <span className="relative z-10">Fork Repository</span>
                </a>
              </div>
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4 text-blue-800">
                  MIT License
                </h4>
                <p className="text-gray-400">Copyright © 2025 Carsen Klock</p>
                <p className="text-gray-400 mt-2">
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software...
                </p>
                <a
                  href="https://github.com/metaspartan/nodely/blob/main/LICENSE"
                  className="text-blue-600 hover:text-blue-400 mt-2 inline-block transition-colors"
                >
                  View full license
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* open source end*/}
      </main>

      {/* Footer */}
      <footer className="bg-[#09090B] border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6a55e0] to-[#263e80] text-transparent bg-clip-text">
                nodely
              </h3>
              <p className="text-gray-400 mb-4">
                An infinite canvas for your thoughts—
                <br />
                connecting nodes and AI services to explore ideas in depth.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/metaspartan/nodely"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#D8C794] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github h-6 w-6"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/nodelyai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#D8C794] transition-colors"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                  </svg>
                </a>
                <a
                  href="https://t.me/nodely_official"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#D8C794] transition-colors"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"></path>
                  </svg>
                </a>
                <a
                  href="https://discord.gg/xvS9ymZuH4"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#D8C794] transition-colors"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-800">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/metaspartan/nodely/wiki"
                    className="text-gray-400 hover:text-[#D8C794] transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/metaspartan/nodely/releases"
                    className="text-gray-400 hover:text-[#D8C794] transition-colors"
                  >
                    Releases
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/metaspartan/nodely/issues"
                    className="text-gray-400 hover:text-[#D8C794] transition-colors"
                  >
                    Issues
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-800">
                Community
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/metaspartan/nodely/blob/main/CONTRIBUTING.md"
                    className="text-gray-400 hover:text-[#D8C794] transition-colors"
                  >
                    Contributing
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/metaspartan/nodely/blob/main/CODE_OF_CONDUCT.md"
                    className="text-gray-400 hover:text-[#D8C794] transition-colors"
                  >
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#222] text-center text-gray-400">
            <p>© 2025 nodely.ai. Created by Carsen Klock. MIT License.</p>
          </div>
        </div>
      </footer>

      {/* Scroll top Button */}

      <div>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 py-5 px-6 text-xl bg-[#16312c] text-white rounded-full shadow-lg hover:scale-105 hover:bg-[#2d6157]  transition-colors duration-400"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
