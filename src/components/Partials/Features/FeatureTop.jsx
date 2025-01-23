import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, ChevronDown, FileText, Download } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FeatureTop = () => {
  const transactions = [
    {
      date: "01/02/2006",
      firstParty: "Venkatappa",
      secondParty: "Kalpana S.",
      nature: "Sale Deed",
      reference: "DEV-1-00117-2007-07",
    },
    {
      date: "21/12/2007",
      firstParty: "Kalpana S.",
      secondParty: "Pramod T.S.",
      nature: "Gift Deed",
      reference: "DEV-1-08145-2007-08",
    },
    {
      date: "07/01/2011",
      firstParty: "Pramod T.S.",
      secondParty: "Mohan Rao",
      nature: "Sale Deed",
      reference: "DEV-1-00071-2011-12",
    },
    {
      date: "13/06/2011",
      firstParty: "Mohan Rao",
      secondParty: "Rio M. D'Sa",
      nature: "Sale Deed",
      reference: "DEV-1-01175-2011-12",
    },
    {
      date: "11/11/2015",
      firstParty: "Rio M. D'Sa",
      secondParty: "Munirayappa",
      nature: "Sale Deed",
      reference: "DEV-1-10011-2015-16",
    },
    {
      date: "07/08/2021",
      firstParty: "Munirayappa",
      secondParty: "Amir Beg",
      nature: "Sale Deed",
      reference: "DEV-1-06771-2020-21",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="feature-upper w-full  flex flex-col lg:flex-row items-center justify-between gap-6 px-20"
    >
      {/* Left Div */}
      <div className=" lg:w-[25%] w-[50%] flex justify-center  h-fit ">
        <div className=" w-full h-fit  border-[1.9px] border-gray-800 py-10 p-7 flex flex-col items-center text-start">
          <h1 className="text-[6vw] lg:text-[2.3vw] tracking-tighter leading-tight font-semibold text-[#201B1B]">
            Generate title flows instantly.
          </h1>
          <h3 className="text-sm lg:text-lg mt-4 lg:mt-8">
            Be it risk assessment for sanctioning secured loans or large-scale real estate projects,
            generate title history of lands in seconds with Titlewize. Get detailed, accurate, and actionable information
            of past transactions, mortgages, and ownership to help you make informed investments.
          </h3>
        </div>
      </div>

      {/* Right Div with Animation */}
      <motion.div
        className="feature-upper-right  w-[95%] lg:w-[75%] flex justify-center"
        initial={{ x: "100%", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" ,delay:0.5}}
              >
        <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-[#fafafa] border rounded-lg">
          {/* Left Sidebar */}
          <div className="w-full lg:w-56 bg-[#fafafa] border-b lg:border-r border-gray-200">
            <div className="p-4">
              <button className="flex items-center mb-4">
                <Home className="w-4 h-4 text-gray-500" />
              </button>
              <div className="space-y-1">
                <div className="bg-gray-200 px-4 py-2 text-sm rounded">New Titleflow</div>
                <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                  History
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                  Saved
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-lg lg:text-xl font-semibold">
                Title<span className="text-red-500">Wize</span>
              </h1>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center mb-8 text-sm flex-wrap">
              <span className="px-4 py-1 bg-gray-100 rounded text-gray-600 mb-2 lg:mb-0">
                Property details
              </span>
              <span className="mx-2 text-gray-400">→</span>
              <span className="px-4 py-1 bg-gray-100 rounded text-gray-600 mb-2 lg:mb-0">
                Upload documents
              </span>
              <span className="mx-2 text-gray-400">→</span>
              <span className="px-4 py-1 bg-black text-white rounded">Generate Titleflow</span>
            </div>

            {/* View Options */}
            <div className="flex gap-4 mb-6 flex-wrap">
              <button className="px-4 py-1 bg-red-500 text-white rounded-full text-sm">
                Brief
              </button>
              <button className="px-4 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-sm">
                Timeline
              </button>
              <button className="px-4 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-sm">
                Detailed
              </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-gray-600">Date</th>
                    <th className="text-left p-4 font-medium text-gray-600">First Party</th>
                    <th className="text-left p-4 font-medium text-gray-600">Second Party</th>
                    <th className="text-left p-4 font-medium text-gray-600">Nature of Transaction</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className={cn("border-b", index === transactions.length - 1 && "border-b-0")}>
                      <td className="p-4">{transaction.date}</td>
                      <td className="p-4">{transaction.firstParty}</td>
                      <td className="p-4">{transaction.secondParty}</td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span>{transaction.nature}</span>
                          <span className="text-xs text-gray-500">{transaction.reference}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Download Options */}
            <div className="flex justify-end mt-4 gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded-sm">
                <Download className="w-3 h-3" />
                Download as PDF
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded-sm">
                <Download className="w-3 h-3" />
                Download as XLSX
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureTop;
