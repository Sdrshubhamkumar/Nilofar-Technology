// import React from "react";
import {
  FaCogs,
  FaCheckCircle,
  FaMobileAlt,
  FaShieldAlt,
  FaPaintBrush,
  FaCloudUploadAlt,
  FaSyncAlt,
  FaLifeRing,
} from "react-icons/fa";

const features = [
  {
    title: "Customized Solutions",
    icon: <FaCogs className="text-white text-3xl" />,
    description:
      "We understand that every business has distinct requirements. Our mobile app development service starts with in-depth consultations to grasp your vision, objectives, and target audience.",
  },
  {
    title: "Quality Assurance",
    icon: <FaCheckCircle className="text-white text-3xl" />,
    description:
      "Our skilled QA team rigorously tests the app for functionality, performance, security, and compatibility across multiple devices and platforms to deliver a bug-free and reliable product.",
  },
  {
    title: "Platform Expertise",
    icon: <FaMobileAlt className="text-white text-3xl" />,
    description:
      "Our team is skilled in developing mobile apps for iOS, Android, and cross-platform solutions using React Native and Flutter.",
  },
  {
    title: "Security and Data Privacy",
    icon: <FaShieldAlt className="text-white text-3xl" />,
    description:
      "We implement robust security measures, secure authentication methods, and data encryption to safeguard user information and comply with data protection regulations.",
  },
  {
    title: "UX/UI Design",
    icon: <FaPaintBrush className="text-white text-3xl" />,
    description:
      "Our designers create intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
  },
  {
    title: "App Store Submission",
    icon: <FaCloudUploadAlt className="text-white text-3xl" />,
    description:
      "We assist with the submission process to Apple App Store and Google Play Store, ensuring full compliance with guidelines.",
  },
  {
    title: "Agile Development",
    icon: <FaSyncAlt className="text-white text-3xl" />,
    description:
      "We follow Agile methodologies to deliver iterative updates, incorporate feedback, and adapt to changing requirements quickly.",
  },
  {
    title: "Post-Launch Support and Maintenance",
    icon: <FaLifeRing className="text-white text-3xl" />,
    description:
      "We provide ongoing support, address any issues post-launch, and implement timely updates based on feedback and business needs.",
  },
];

const MobileAppFeatures = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
              <hr className="border-t border-white my-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppFeatures;
