"use client";

import { Drawer } from "@/components/ui/drawer";
import { useState } from "react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Textarea } from "@/components/ui/textarea";
import type { ActivePatient } from "@/data/ActivePatientData";
import { demoNotes } from "@/data/DemoNotes";
import { formatShortDate } from "@/lib/time";

interface NoteDrawerProps {
  open: boolean;
  onClose: () => void;
  patient?: ActivePatient;
}

export function NoteDrawer({ open, onClose, patient }: NoteDrawerProps) {
  const [noteHeading, setNoteHeading] = useState("");
  const [noteText, setNoteText] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [notes, setNotes] = useState<
    { id: string; date: Date; heading: string; text: string }[]
  >(
    demoNotes.map((n) => ({
      id: n.id,
      date: new Date(n.createdAtISO),
      heading: n.heading,
      text: n.text,
    }))
  );

  // Get current date and time
  const currentDate = new Date();
  const formatDate = (d: Date = currentDate) => formatShortDate(d);

  const formatTime = (d: Date = currentDate) => {
    return d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getInitials = (fullName: string) => {
    if (!fullName) return "--";
    const parts = fullName.trim().split(/\s+/);
    const first = parts[0]?.[0] || "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] || "" : "";
    return (first + last).toUpperCase();
  };

  const handleAddNew = () => {
    setShowEditor(true);
    setNoteHeading("");
    setNoteText("");
  };

  const handleSave = () => {
    const trimmedHeading = noteHeading.trim();
    const trimmedText = noteText.trim();
    if (!trimmedHeading || !trimmedText) return;
    const newNote = {
      id: Math.random().toString(36).slice(2),
      date: new Date(),
      heading: trimmedHeading,
      text: trimmedText,
    };
    setNotes((prev) => [newNote, ...prev]);
    setShowEditor(false);
    setNoteHeading("");
    setNoteText("");
  };

  const handleCancel = () => {
    setShowEditor(false);
    setNoteHeading("");
    setNoteText("");
  };

  const rows = notes.map((n, idx) => {
    const isLast = idx === notes.length - 1;
    return (
      <div
        key={n.id}
        className={`self-stretch bg-white inline-flex justify-start items-center outline outline-offset-[-0.5px] outline-stone-300 ${
          isLast ? "rounded-bl-[10px] rounded-br-[10px]" : ""
        }`}
      >
        <div className="w-32 px-3.5 py-3 inline-flex flex-col justify-center items-start gap-0.5">
          <div className="self-stretch justify-center text-zinc-900 text-sm font-semibold">
            {formatDate(n.date)}
          </div>
          <div className="self-stretch justify-center text-zinc-900 text-sm font-normal">
            {formatTime(n.date)}
          </div>
        </div>
        <div className="flex-1 self-stretch px-3.5 py-3 inline-flex flex-col justify-start items-start gap-0.5">
          <div className="self-stretch flex-1 justify-center text-zinc-900 text-sm font-semibold">
            {n.heading}
          </div>
          <div className="self-stretch flex-1 justify-center text-zinc-900 text-sm font-normal line-clamp-2">
            {n.text}
          </div>
        </div>
      </div>
    );
  });

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="w-full h-[calc(100vh-100px)] bg-white flex flex-col justify-start items-start gap-6">
        {/* Header Section */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <div className="w-full flex justify-start items-center gap-6">
            <div className="flex-1 justify-center text-zinc-900 text-2xl font-bold">
              Notes
            </div>
          </div>
          <div className="w-full h-0 border-t border-stone-300" />

          {/* Patient Info Section */}
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="flex justify-start items-start gap-3">
              <div className="px-4 py-4 bg-purple-200 rounded-[35.50px] flex justify-center items-center gap-3">
                <div className="justify-center text-purple-700 text-2xl font-semibold">
                  {getInitials(patient?.name || "")}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="justify-center text-zinc-900 text-base font-semibold">
                  {patient?.name || "--"}
                </div>
                <div className="justify-center text-neutral-400 text-sm font-normal">
                  {patient?.phoneNumber || "--"}
                </div>
                <div className="justify-center text-neutral-400 text-sm font-normal">
                  {patient?.email || "--"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {!showEditor ? (
          <div className="w-full flex-1 flex flex-col justify-start items-start gap-3">
            <PrimaryButton variant="primary" className="px-3 py-1" onClick={handleAddNew}>
              Add New Note
            </PrimaryButton>
            <div className="w-full bg-white rounded-[10px] flex flex-col justify-start items-start">
              {/* Table header */}
              <div className="self-stretch bg-white rounded-tl-[10px] rounded-tr-[10px] outline outline-offset-[-0.5px] outline-stone-300 inline-flex justify-start items-center">
                <div className="w-32 px-3.5 py-3 flex justify-start items-center gap-2.5">
                  <div className="flex-1 text-center justify-center text-zinc-900 text-sm font-semibold">
                    Date & Time
                  </div>
                </div>
                <div className="flex-1 px-3.5 py-3 flex justify-start items-center gap-2.5">
                  <div className="flex-1 text-center justify-center text-zinc-900 text-sm font-semibold">
                    Note
                  </div>
                </div>
              </div>
              {/* Table rows */}
              {rows}
            </div>
          </div>
        ) : (
          <div className="w-full flex-1 flex flex-col justify-start items-start gap-3">
            <div className="w-full flex justify-start items-center gap-6">
              <input
                type="text"
                value={noteHeading}
                onChange={(e) => setNoteHeading(e.target.value)}
                placeholder="Note Heading"
                className="flex-1 text-zinc-900 text-xl font-semibold bg-transparent border-none outline-none focus:ring-0 placeholder:text-zinc-400"
              />
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="text-zinc-900 text-sm font-semibold">
                  {formatDate()}
                </div>
                <div className="text-zinc-900 text-sm font-normal">
                  {formatTime()}
                </div>
              </div>
            </div>
            <Textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Enter Text"
              className="w-full flex-1 min-h-[400px] resize-none"
            />
          </div>
        )}

        {/* Footer pinned to bottom */}
        <div className="w-full mt-auto">
          <div className="w-full h-0 border-t border-stone-300" />
          <div className="w-full flex justify-end items-end gap-3 pt-4">
            {!showEditor ? (
              <PrimaryButton variant="outline" onClick={onClose} className="px-5 py-[5px]">
                Close
              </PrimaryButton>
            ) : (
              <>
                <PrimaryButton variant="outline" onClick={handleCancel} className="px-5 py-[5px]">
                  Cancel
                </PrimaryButton>
                <PrimaryButton variant="primary" onClick={handleSave} className="px-5 py-[5px]">
                  Save Note
                </PrimaryButton>
              </>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
}
