import React, { useState } from "react";
import { Check, Plus, Download } from "lucide-react";

export default function BillingInformation() {
  const [selected, setSelected] = useState("Bank Account");
  const options = ["Bank Account", "Credit Card", "PayPal", "Crypto Wallet"];

  return (
    <div className="w-full p-8 bg-[#0D1D22] rounded-xl shadow-md ">
      <div className=" ">
        {/* Title */}
        <h2 className="text-xl font-semibold text-white mb-8">
          Billing Information
        </h2>

        {/* Payment Method */}
        <div className="mb-8">
          <label className="text-sm text-gray-400 block mb-2">
            Payment Method
          </label>

          <div className="relative">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="rounded-xl h-12 px-2 w-full bg-[#253438]"
            >
              {options.map((option) => (
                <option key={option} value={option} className="bg-[#2B2B30]">
                  {option}
                </option>
              ))}
            </select>

            {/* Check Icon on right side */}
            <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500 pointer-events-none" />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label
              htmlFor="legal-name"
              className="text-sm text-gray-400 block mb-1"
            >
              Legal Name
            </label>
            <input
              id="legal-name"
              value="Kareeme Phillip"
              className="rounded-xl h-12 px-2 w-full bg-[#253438]"
            />
          </div>

          <div>
            <label
              htmlFor="bank-name"
              className="text-sm text-gray-400 block mb-1"
            >
              Bank Name
            </label>
            <input
              id="bank-name"
              value="USA Bank"
              className=" rounded-xl h-12 px-2 w-full bg-[#253438]"
            />
          </div>

          <div>
            <label
              htmlFor="account-number"
              className="text-sm text-gray-400 block mb-1"
            >
              Account Number
            </label>
            <input
              id="account-number"
              value="••••••••1234"
              className="rounded-xl h-12 px-2 w-full bg-[#253438]"
            />
          </div>

          <div>
            <label
              htmlFor="routing-number"
              className="text-sm text-gray-400 block mb-1"
            >
              Routing Number
            </label>
            <input
              id="routing-number"
              value="••••••5678"
              className="rounded-xl h-12 px-2 w-full bg-[#253438]"
            />
          </div>
        </div>

        {/* Add New Button */}
        <div className="mb-10">
          <button className="w-full text-center  flex items-center justify-center h-12 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-md">
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </button>
        </div>

        {/* Invoices */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Invoices & Payment History
          </h3>

          <div className="space-y-4">
            {/* Invoice Item */}
            <div className="flex items-center gap-5 rounded-xl shadow-sm">
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-white font-medium">Invoice #12345</span>
                <span className="text-white">$50.00</span>
                <span className="">Paid (Dec 20, 2023)</span>
              </div>
              <button className="flex items-center text-green-500 hover:text-indigo-300 rounded-lg px-2 py-1">
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
            </div>

            {/* Invoice Item */}
            <div className="flex items-center gap-5  rounded-xl shadow-sm">
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-white font-medium">Invoice #12340</span>
                <span className="text-white">$30.00</span>
                <span className="">Paid (Dec 15, 2023)</span>
              </div>
              <button className="flex items-center text-green-500  hover:text-indigo-300 rounded-lg px-2 py-1">
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
