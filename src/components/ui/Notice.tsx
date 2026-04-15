type NoticeProps = {
  message: string;
};

const Notice = ({ message }: NoticeProps) => {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--surface-muted) px-4 py-3 text-sm text-(--muted-text) backdrop-blur">
      {message}
    </div>
  );
};

export default Notice;
