export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black" suppressHydrationWarning>
            <div className="loader-wrapper">
                <span className="loader-letter">G</span>
                <span className="loader-letter">e</span>
                <span className="loader-letter">n</span>
                <span className="loader-letter">e</span>
                <span className="loader-letter">r</span>
                <span className="loader-letter">a</span>
                <span className="loader-letter">t</span>
                <span className="loader-letter">i</span>
                <span className="loader-letter">n</span>
                <span className="loader-letter">g</span>

                <div className="loader"></div>
            </div>
        </div>
    )
}
