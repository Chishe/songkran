import Link from "next/link";
import History from "@/components/History";
import Amain from "@/components/Amain";
export default function Documentrecord() {
  return (
    <div className="h-screen w-full flex gap-2">
      <History url="/api/history" />
      <div className="h-screen w-full flex-col">
        <Amain
          dataUrl="/api/temp"
          statusUrlBase="/api/status-actual/"
          graphUrlBase="/api/temp-line/"
          gaugeUrlBase="/api/gauge-temp/"
          onoffUrlBase="/api/status-temp"
        />
      </div>
      <div className="fixed bottom-4 left-4 flex gap-2 z-[100]">
        <Link
          href="/document-record"
          className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <span className="ml-1 font-bold text-lg">Back</span>
        </Link>
        <Link
          href="/document-record-1"
          className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
        >
          <span className="mr-1 font-bold text-lg">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
