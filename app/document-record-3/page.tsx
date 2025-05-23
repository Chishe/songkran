import Link from "next/link";
import History from "@/components/History";
import Amain from "@/components/Amain";

export default function Documentrecord() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row gap-2">
      <div className="flex-1 h-full">
        <History url="/api/history-4" />
      </div>

      <div className="flex-1 h-full">
        <Amain
          dataUrl="/api/bw-fan"
          statusUrlBase="/api/bw-actual/"
          graphUrlBase="/api/bw-fan-line/"
          gaugeUrlBase="/api/gauge-bw-fan/"
          onoffUrlBase="/api/status-bw"
        />
      </div>

      <div className="fixed bottom-4 left-4 flex gap-2 z-[100]">
        <Link
          href="/document-record-2"
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
          href="/document-record-4"
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
