export default function EditUrl() {
    return (
        <div className="flex justify-center items-center m-4">
            <input type="text" className="p-2 focus:outline-none rounded-lg" />
            <button className="ml-2 py-1 px-3 rounded-md bg-primary hover:bg-hover transition-colors text-slate-100">
                Edit
            </button>
        </div>
    );
}
