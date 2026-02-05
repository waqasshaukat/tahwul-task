type Comment = {
  author: string;
  time: string;
  text: string;
};

type Props = {
  comments: Comment[];
};

export default function CommentsPanel({ comments }: Props) {
  return (
    <div className="w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">Comments</h3>
      <div className="mt-3 space-y-3">
        {comments.map((comment) => (
          <div key={comment.author} className="rounded-[10px] border border-[#E0E8ED] bg-white px-3 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E0E8ED] text-[12px] font-medium text-[#8597A8]">
                  {comment.author
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <span className="text-[14px] font-semibold leading-[20px] text-[#1D3557]">
                  {comment.author}
                </span>
              </div>
              <span className="text-[12px] font-normal leading-[16px] text-[#8597A8]">
                {comment.time}
              </span>
            </div>
            <p className="mt-2 text-[14px] font-normal leading-[20px] text-[#1D3557]">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <textarea
          className="h-[112px] w-full rounded-[10px] border border-[#E0E8ED] bg-white p-3 text-[14px] leading-[20px] text-[#1D3557] outline-none focus:border-[#1D3557]"
          placeholder="Add a comment..."
        />
        <button className="mt-3 inline-flex h-8 items-center gap-2 rounded-[8px] bg-[#1D3557] px-4 text-[12px] font-semibold leading-[16px] text-white">
          Post Comment
        </button>
      </div>
    </div>
  );
}
