import History from "@/components/History";
import Tempcondition from "@/components/Tempcondition";
export default function Documentrecord() {
  return (
    <div className="h-screen flex gap-2">
      <History url="/api/history" />
      <div className="h-screen w-full flex-col">
        <Tempcondition />
      </div>
    </div>
  );
}
