import React from "react";
import {
  FaUserGraduate,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaBook,
  FaBus,
  FaBed,
  FaUsersCog,
  FaPen,
  FaComments,
  FaMoneyCheckAlt,
  FaFileInvoiceDollar,
  FaLock,
  FaChartBar,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserGraduate className="text-white text-2xl" />,
    title: "Student Information Management",
    points: [
      "Student profiles with contact details, demographics, and medical information.",
      "Admission and enrollment management, including document uploads.",
      "Class assignments and section allocation.",
    ],
  },
  {
    icon: <FaCalendarCheck className="text-white text-2xl" />,
    title: "Attendance Tracking",
    points: [
      "Automated attendance recording using biometrics, RFID, or manual entry.",
      "Real-time tracking of student and staff attendance.",
      "Absence and leave management.",
    ],
  },
  {
    icon: <FaChalkboardTeacher className="text-white text-2xl" />,
    title: "Academic Management",
    points: [
      "Curriculum planning and course management.",
      "Lesson planning, resource sharing, and content management.",
      "Assignment, homework, and project tracking.",
    ],
  },
  {
    icon: <FaBook className="text-white text-2xl" />,
    title: "Library Management",
    points: [
      "Cataloging of books and resources.",
      "Check-in/check-out management.",
      "Income and expense reporting.",
    ],
  },
  {
    icon: <FaBus className="text-white text-2xl" />,
    title: "Transportation Management",
    points: [
      "Route planning and optimization.",
      "Vehicle tracking and maintenance.",
      "Transport fee management.",
    ],
  },
  {
    icon: <FaBed className="text-white text-2xl" />,
    title: "Hostel Management (if applicable)",
    points: [
      "Room allocation and management.",
      "Hostel fee collection and tracking.",
    ],
  },
  {
    icon: <FaUsersCog className="text-white text-2xl" />,
    title: "HRM (Human Resources Management)",
    points: [
      "Staff profiles and qualifications management.",
      "Payroll processing and salary management.",
      "Leave and attendance management for staff.",
    ],
  },
  {
    icon: <FaPen className="text-white text-2xl" />,
    title: "Examination and Assessment",
    points: [
      "Exam schedule creation and management.",
      "Grade and mark management for students.",
      "Report card generation and distribution.",
    ],
  },
  {
    icon: <FaComments className="text-white text-2xl" />,
    title: "Communication and Collaboration",
    points: [
      "Parent-teacher communication.",
      "Announcement platforms for updates.",
      "Discussion forums and chat features.",
    ],
  },
  {
    icon: <FaMoneyCheckAlt className="text-white text-2xl" />,
    title: "Fee Management",
    points: [
      "Fee structure setup and customization.",
      "Online fee payment integration.",
      "Fee receipt generation and tracking.",
    ],
  },
  {
    icon: <FaFileInvoiceDollar className="text-white text-2xl" />,
    title: "Financial Management",
    points: [
      "Purchase order management and invoice tracking.",
      "Stock Management.",
      "Income and expense reporting.",
    ],
  },
  {
    icon: <FaLock className="text-white text-2xl" />,
    title: "Security and Access Control",
    points: [
      "User role management and access restrictions.",
      "Visitor management and secure access.",
    ],
  },
  {
    icon: <FaChartBar className="text-white text-2xl" />,
    title: "Data Analytics and Reporting",
    points: [
      "Customizable reports for various modules.",
      "Data visualization tools for performance analysis.",
    ],
  },
  {
    icon: <FaMobileAlt className="text-white text-2xl" />,
    title: "Mobile App Integration",
    points: [
      "Mobile access for parents, students, and staff.",
      "Notifications and updates on mobile devices.",
    ],
  },
  {
    icon: <FaDatabase className="text-white text-2xl" />,
    title: "Archiving and Backup",
    points: [
      "Regular data backups and disaster recovery options.",
    ],
  },
];

const SchoolERPFeatures = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Here's an expanded list of features in our school ERP.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <ul className="list-disc ml-5 text-gray-300">
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
       <hr className="border-white opacity-50 m-5" />
    </section>
  );
};

export default SchoolERPFeatures;
