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
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-ink-800">Comments</h3>
      <div className="mt-4 space-y-3">
        {comments.map((comment) => (
          <div key={comment.author} className="rounded-xl border border-slateblue-100 bg-white p-3">
            <div className="flex items-center justify-between text-xs text-slateblue-500">
              <span className="font-semibold text-ink-900">{comment.author}</span>
              <span>{comment.time}</span>
            </div>
            <p className="mt-2 text-xs text-slateblue-600">{comment.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <textarea
          className="h-28 w-full rounded-xl border border-slateblue-100 bg-white p-3 text-xs text-ink-800 outline-none focus:border-brand-500"
          placeholder="Add a comment..."
        />
        <button className="mt-3 rounded-xl bg-ink-900 px-4 py-2 text-xs font-semibold text-white">
          Post Comment
        </button>
      </div>
    </div>
  );
}
