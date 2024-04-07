export default function Button({ children, type }) {
    return (
        <button
            className="m-2 border p-3 w-28 text-slate-200 rounded-lg bg-primary hover:bg-hover transition-colors"
            type={type || ''}
        >
            {children}
        </button>
    );
}
