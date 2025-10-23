"use client";
import React from "react";
import FaxToDoctor from "@/components/FaxToDoctor/FaxToDoctor";
import { Breadcrumb } from "@/components/Common/breadcrumbs";
import { useParams } from "next/navigation";
import activePatientData from "@/data/ActivePatientData";
import SentTable from "@/components/FaxToDoctor/SentTable";
import ReceivedTable from "@/components/FaxToDoctor/ReceivedTable";

const FaxToDoctorPage = () => {
  const params = useParams();
  const patientId = Array.isArray(params.id) ? params.id[0] : params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));
  const [activeTab, setActiveTab] = React.useState("new");

  const renderTabContent = () => {
    switch (activeTab) {
      case "new":
        return <FaxToDoctor patientId={patientId} />;
      case "sent":
        return <SentTable />;
      case "received":
        return <ReceivedTable />;
      default:
        return <FaxToDoctor patientId={patientId} />;
    }
  };

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Breadcrumb
          items={[
            { label: "Patient Roster", href: "/" },
            {
              label: `${patient?.name || "Insert Patient Name"}'s Dashboard`,
              href: `/patient/${patientId}`,
            },
            { label: "Fax to Doctor", active: true },
          ]}
        />
      </div>

      {/* Tab Navigation */}
      <div className="self-stretch inline-flex justify-start items-center gap-1">
        <div
          onClick={() => setActiveTab("new")}
          className={`px-2 py-1 rounded-tl-md rounded-tr-md flex justify-center items-center gap-2.5 cursor-pointer ${
            activeTab === "new" ? "bg-sky-100" : ""
          }`}
        >
          <div
            className={`justify-center text-sm font-semibold font-['Poppins'] ${
              activeTab === "new"
                ? "text-zinc-900 underline"
                : "text-neutral-400"
            }`}
          >
            New Fax
          </div>
        </div>
        <div
          onClick={() => setActiveTab("sent")}
          className={`px-2 py-1 rounded-tl-md rounded-tr-md flex justify-center items-center gap-2.5 cursor-pointer ${
            activeTab === "sent" ? "bg-sky-100" : ""
          }`}
        >
          <div
            className={`justify-center text-sm font-semibold font-['Poppins'] ${
              activeTab === "sent"
                ? "text-zinc-900 underline"
                : "text-neutral-400"
            }`}
          >
            Sent
          </div>
        </div>
        <div
          onClick={() => setActiveTab("received")}
          className={`px-2 py-1 rounded-tl-md rounded-tr-md flex justify-center items-center gap-2.5 cursor-pointer ${
            activeTab === "received" ? "bg-sky-100" : ""
          }`}
        >
          <div
            className={`justify-center text-sm font-semibold font-['Poppins'] ${
              activeTab === "received"
                ? "text-zinc-900 underline"
                : "text-neutral-400"
            }`}
          >
            Received
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default FaxToDoctorPage;
