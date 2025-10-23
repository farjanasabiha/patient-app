"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search, Send, Paperclip, X } from "lucide-react";
import Image from "next/image";
import { EditMessageIcon } from "../ui/icons/EditMessage";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isActive?: boolean;
}

const Messages = () => {
  const [messageText, setMessageText] = useState<string>("");
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);
  const [isInboxOpen, setIsInboxOpen] = useState<boolean>(false);

  // Mock data
  const conversations: Conversation[] = [
    {
      id: "FL",
      name: "First & Last Name",
      initials: "FL",
      lastMessage: "Thanks",
      timestamp: "09:38 AM",
      unreadCount: 2,
    },
    {
      id: "IMG",
      name: "First & Last Name",
      avatar: "https://placehold.co/71x71",
      initials: "FL",
      lastMessage: "Thank You",
      timestamp: "Yesterday",
      unreadCount: 0,
    },
    {
      id: "NC",
      name: "First & Last Name",
      initials: "NC",
      lastMessage: "Ok let me check",
      timestamp: "25 May",
      unreadCount: 0,
      isActive: true,
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      text: "Hi can you send me the document upload email again?",
      sender: "other",
      timestamp: "10:05 AM",
    },
    {
      id: "2",
      text: "Just emailed it to you. Please check your inbox and spam folders",
      sender: "user",
      timestamp: "10:06 AM",
    },
    {
      id: "3",
      text: "Ok let me check",
      sender: "other",
      timestamp: "10:07 AM",
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle sending message
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-md flex flex-col justify-start items-start gap-6 h-full">
      {/* Header */}
      <div className="w-full flex justify-between items-start flex-shrink-0">
        <h1 className="text-zinc-900 text-2xl font-bold">Messages</h1>
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 flex justify-start items-start gap-6 min-h-0">
        {/* Left Side - Conversations List */}
        <div className="w-[40%] h-full flex flex-col justify-start items-start gap-3 min-h-0">
          {/* Search Bar */}
          <div className="flex items-center gap-2.5 flex-shrink-0 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                placeholder="Search by name or phone"
                className="pl-10 bg-white border-stone-300"
              />
            </div>
            <Button size="sm" className="p-2 bg-purple-700 rounded-full">
              <EditMessageIcon className="w-4 h-4 text-white" />
            </Button>
          </div>

          {/* Conversations List */}
          <div className="w-full flex-1 bg-sky-50 rounded-md overflow-y-auto min-h-0">
            <div className="flex flex-col">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-2.5 flex items-center gap-3 cursor-pointer hover:bg-sky-100 transition-colors ${
                    selectedConversation === conversation.id
                      ? "bg-violet-50"
                      : "bg-sky-50"
                  }`}
                  onClick={() => {
                    setSelectedConversation(conversation.id);
                    setIsInboxOpen(true);
                  }}
                >
                  {conversation.avatar ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={conversation.avatar}
                        alt={conversation.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                      <span className="text-purple-700 text-2xl font-semibold">
                        {conversation.initials}
                      </span>
                    </div>
                  )}

                  <div className="flex-1 flex flex-col gap-0.5">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-900 text-base font-semibold">
                        {conversation.name}
                      </span>
                      <span className="text-neutral-400 text-sm">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sky-700 text-sm">
                        {conversation.lastMessage}
                      </span>
                      {conversation.unreadCount > 0 && (
                        <div className="px-1.5 py-0.5 bg-purple-700 rounded-xl text-white text-xs font-semibold">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-px h-full bg-gray-200"></div>
        {/* Right Side - Chat Interface */}
        {isInboxOpen && (
          <div className="w-[60%] h-full flex flex-col justify-start items-start gap-3 min-h-0">
            {/* Chat Header */}
            <div className="w-full flex justify-between items-start flex-shrink-0">
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 text-2xl font-semibold">
                    {selectedConversation}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-zinc-900 text-base font-semibold">
                    First & Last Name
                  </span>
                  <span className="text-neutral-400 text-sm">
                    demoemail@gmail.com
                  </span>
                  <span className="text-neutral-400 text-sm">123 456 7890</span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="p-1.5"
                onClick={() => setIsInboxOpen(false)}
              >
                <X className="w-6 h-6 text-neutral-400" />
              </Button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-stone-300" />

            {/* Messages */}
            <div className="flex-1 w-full overflow-y-auto min-h-0">
              <div className="flex flex-col gap-2.5">
                <div className="text-center text-neutral-400 text-[10px]">
                  Sun, 25 May at 10:05 AM
                </div>

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-2.5 py-1 shadow-sm max-w-xs ${
                        message.sender === "user"
                          ? "rounded-tl-2xl rounded-bl-2xl rounded-br-2xl bg-purple-700 text-white"
                          : "rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-white text-zinc-900 border border-gray-100"
                      }`}
                    >
                      <span className="text-xs">{message.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Message Input */}
            <div className="w-full flex items-center gap-2.5 flex-shrink-0">
              <div className="flex-1 relative">
                <Input
                  placeholder="Type a message here"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pr-20"
                />
              </div>
              <Button variant="ghost" size="sm" className="p-2">
                <Paperclip className="w-4 h-4 text-neutral-400" />
              </Button>
              <Button
                size="sm"
                className="p-2 bg-purple-700 rounded-full"
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
              >
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
