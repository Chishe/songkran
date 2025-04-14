import HistoryResult from "@/components/HistoryResult";
import Fincondition from "@/components/Fincondition";


export default function Home() {
  return (
    <div className="h-screen flex gap-2">
      <HistoryResult />
      <Fincondition />
    </div>
  );
}
