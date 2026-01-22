import { cn } from "./utils";

export function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lift">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "min-h-[44px] min-w-[44px] rounded-full border border-muted text-xl",
              "hover:bg-muted"
            )}
            aria-label="닫기"
          >
            ×
          </button>
        </div>
        <div className="mt-4 text-sm text-slate-600">{children}</div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded-2xl border border-muted px-5 text-sm font-semibold"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
