"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    id: "freight",
    title: "Freight Shipping",
    description:
      "Comprehensive freight solutions for all your shipping needs with global reach and reliability.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.667 15.833a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM15 15.833a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeMiterlimit="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.375 14.167H12.5V5.5A.5.5 0 0 0 12 5H.833M4.708 14.167H3a.5.5 0 0 1-.5-.5V9.583"
          stroke="#fff"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M1.667 7.5H5"
          stroke="#fff"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 7.5h4.675a.5.5 0 0 1 .457.297l1.492 3.356a.5.5 0 0 1 .043.203v2.31a.5.5 0 0 1-.5.5h-1.584M12.5 14.167h.833"
          stroke="#fff"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
    features: [
      {
        stat: "50M",
        description: "shipping destinations",
        text: "Global coverage across all major shipping routes and destinations worldwide.",
      },
      {
        stat: "1.2K",
        description: "carrier routes",
        text: "Extensive network of trusted carrier partnerships for optimal route coverage.",
      },
      {
        stat: "10K",
        description: "professional drivers",
        text: "Experienced and certified drivers ensuring safe and timely deliveries.",
      },
    ],
  },
  {
    id: "customer",
    title: "Road to Customer",
    description:
      "Direct-to-customer delivery solutions with personalized service and real-time tracking.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.49984 9.16667C9.34075 9.16667 10.8332 7.67428 10.8332 5.83333C10.8332 3.99238 9.34075 2.5 7.49984 2.5C5.65889 2.5 4.1665 3.99238 4.1665 5.83333C4.1665 7.67428 5.65889 9.16667 7.49984 9.16667Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.6665 15.0001C1.6665 11.7784 4.27818 9.16675 7.49984 9.16675C8.86234 9.16675 10.1158 9.63391 11.1087 10.4167"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.8036 13.9224L18.0505 15.5891C18.1996 16.5958 17.4196 17.5 16.4018 17.5H13.5986C12.5809 17.5 11.8008 16.5958 11.95 15.5891L12.1969 13.9224C12.318 13.1052 13.0195 12.5 13.8456 12.5H16.1549C16.981 12.5 17.6825 13.1052 17.8036 13.9224Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1665 10.8333H15.8332"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    features: [
      {
        stat: "50M",
        description: "shipping destinations",
        text: "Lorem ipsum dolor sit amet, consectet.",
      },
      {
        stat: "1.2K",
        description: "carrier routes",
        text: "Lorem ipsum dolor sit amet, consectet.",
      },
      {
        stat: "10K",
        description: "professional drivers",
        text: "Lorem ipsum dolor sit amet, consectet.",
      },
    ],
  },
  {
    id: "storage",
    title: "Storage Solutions",
    description:
      "Comprehensive warehousing and storage solutions with advanced inventory management systems.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0505 8.07999L17.2043 15.58C17.3596 16.5896 16.5785 17.5001 15.5571 17.5001H4.44241C3.42094 17.5001 2.6398 16.5896 2.79513 15.58L3.94897 8.07999C4.07406 7.26693 4.77365 6.66675 5.59626 6.66675H14.4032C15.2258 6.66675 15.9254 7.26693 16.0505 8.07999Z"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M11.6668 4.16667C11.6668 3.24619 10.9207 2.5 10.0002 2.5C9.07966 2.5 8.3335 3.24619 8.3335 4.16667"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
    features: [
      {
        stat: "50M",
        description: "shipping destinations",
        text: "Lorem ipsum dolor sit amet, consectet.",
      },
      {
        stat: "1.2K",
        description: "carrier routes",
        text: "Lorem ipsum dolor sit amet, consectet.",
      },
      {
        stat: "10K",
        description: "professional drivers",
        text: "Lorem ipsum dolor sit amet, consectet.",
      },
    ],
  },
];

const ChevronIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8768 6.25439L14.1326 9.51023C14.4051 9.7827 14.4051 10.2244 14.1326 10.4968L10.8768 13.7527C10.6043 14.0251 10.1626 14.0251 9.89017 13.7527C9.61771 13.4802 9.61771 13.0385 9.89017 12.766L11.9549 10.7012H6.19743C5.81212 10.7012 5.49976 10.3888 5.49976 10.0035C5.49976 9.61823 5.81212 9.30586 6.19743 9.30586H11.9549L9.89017 7.24105C9.61771 6.96859 9.61771 6.52685 9.89017 6.25439C10.1626 5.98193 10.6043 5.98193 10.8768 6.25439Z"
      fill="white"
    />
  </svg>
);

export default function ProcessSteps() {
  const [activeId, setActiveId] = useState<string>("");

  return (
    <section className="w-full max-w-5xl mx-auto py-16 lg:py-28 px-6 border-l border-r border-dashed border-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-4xl lg:text-6xl font-medium font-space-grotesk leading-tight tracking-tighter text-text">
                Ebox Pro Logistics Capabilities
              </h2>
              <p className="text-lg leading-6 text-text-secondary">
                Delivering Possibilities, Globally
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:text-left"
            >
              <div className="border border-text rounded-full px-2 py-0.5 text-sm font-medium text-text inline-block w-fit mb-4">
                Client Reviews
              </div>
              <p className="text-lg leading-6 text-text max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent porttitor sapien vel facilisis lobortis.
              </p>
            </motion.div>
          </div>

          {/* Solution Cards */}
          <div className="flex flex-col gap-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rounded-2xl bg-white shadow-ebox-card overflow-hidden"
              >
                {/* Solution Header */}
                <button
                  onClick={() =>
                    setActiveId(activeId === solution.id ? "" : solution.id)
                  }
                  className="w-full p-6 lg:p-7 flex items-center justify-between hover:bg-surface-hover transition-colors group"
                >
                  <div className="flex items-center gap-4 lg:gap-8 flex-1">
                    <div className="bg-primary rounded-lg text-white flex items-center justify-center p-3">
                      {solution.icon}
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-xl font-medium font-space-grotesk text-text mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-ebox-dark shadow-ebox-glow text-white flex items-center justify-center w-5 h-5 flex-none">
                    <ChevronIcon />
                  </div>
                </button>

                {/* Solution Content */}
                {activeId === solution.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-dashed border-border-strong opacity-70"
                  >
                    <div className="p-6 lg:p-7 flex flex-col gap-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Image */}
                        <div className="rounded-2xl min-h-64 flex relative overflow-hidden">
                          <Image
                            src="/graphics/solution-image.webp"
                            alt="Logistics Solution"
                            width={500}
                            height={264}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
                        </div>

                        {/* Features */}
                        <div className="flex justify-center items-center">
                          <div className="flex flex-col gap-0">
                            {solution.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex flex-col gap-1 bg-transparent flex-1 p-4 lg:p-5"
                              >
                                <div className="text-base font-medium font-space-grotesk text-text">
                                  {feature.stat}
                                  <span className="text-atlantio-primary">
                                    +
                                  </span>{" "}
                                  {feature.description}
                                </div>
                                <p className="text-sm leading-relaxed text-text-secondary">
                                  {feature.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

