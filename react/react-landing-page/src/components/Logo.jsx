export default function Logo({ mode = "s" }) {
    return (
        <a className="flex items-center gap-1 cursor-pointer">
            <div className="w-4 h-4 bg-primary/75 transition-opacity hover:bg-primary/100 rounded-full "></div>
            <div className="w-4 h-4 bg-red-500/75 transition-opacity hover:bg-red-500/100 rounded-full"></div>
            {mode === "l" && <span className="text-xl font-medium ml-1">The next Design</span>}
        </a>
    );
}
