"use client";

import { useState } from "react";

type Comment = {
  author: string;
  time: string;
  text: string;
};

type Props = {
  comments: Comment[];
};

export default function CommentsPanel({ comments }: Props) {
  const [message, setMessage] = useState("");
  const isDisabled = message.trim().length === 0;

  return (
    <div className="w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4 md:h-[433px] md:p-[24px]">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">Comments</h3>
      <div className="mt-3 space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.author}
            className="w-full cursor-pointer rounded-[10px] border border-[#E0E8ED] bg-white p-4 transition hover:bg-[#F1F6FA] md:h-[84px]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-[10px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#E0E8ED] text-[12px] font-medium text-[#8597A8]">
                  E
                </div>
                <div className="relative">
                  <span className="block pt-[4px] text-[14px] font-bold leading-[16px] text-[#1D3557]">
                    {comment.author}
                  </span>
                  <p className="mt-[12px] text-[14px] font-normal leading-[20px] text-[#1D3557] md:-ml-[34px]">
                    {comment.text}
                  </p>
                </div>
              </div>
              <span className="pt-[4px] text-[14px] font-normal leading-[16px] text-[#8597A8]">
                {comment.time}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="block h-[111px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-3 text-[14px] leading-[20px] text-[#1D3557] outline-none focus:border-[#1D3557]"
        />
        <button
          type="button"
          disabled={isDisabled}
          className={`mt-4 inline-flex h-[34px] items-center gap-[9px] rounded-[8px] px-[24px] py-[14px] text-[16px] font-normal leading-[16px] ${
            isDisabled
              ? "cursor-not-allowed bg-[#A7B4C0] text-white/80"
              : "bg-[#1D3557] text-white"
          }`}
        >
          <img src="/icons/post.svg" alt="" className="h-4 w-4" />
          Post Comment
        </button>
      </div>
    </div>
  );
}
