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
    <div className="h-[433px] w-[753px] max-w-full rounded-[10px] border border-[#E0E8ED] bg-white p-[24px]">
      <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">Comments</h3>
      <div className="mt-3 space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.author}
            className="h-[84px] w-[705px] max-w-full rounded-[10px] border border-[#E0E8ED] bg-white p-4"
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
                  <p className="mt-[12px] text-[14px] font-normal leading-[20px] text-[#1D3557] -ml-[34px]">
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
          className="h-[111px] w-[705px] max-w-full rounded-[10px] border border-[#E0E8ED] bg-white p-3 text-[14px] leading-[20px] text-[#1D3557] outline-none focus:border-[#1D3557]"
        />
        <button className="mt-4 inline-flex h-[34px] items-center gap-[9px] rounded-[8px] bg-[#1D3557] px-[24px] py-[14px] text-[16px] font-normal leading-[16px] text-white">
          <img src="/icons/post.svg" alt="" className="h-4 w-4" />
          Post Comment
        </button>
      </div>
    </div>
  );
}
