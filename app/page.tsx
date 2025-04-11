import History from "@/components/History";
import Gauge from "@/components/Gauge";
import Line from "@/components/Line";
export default function Home() {
  return (
   <div className="h-full">
    <History/>
    <Line/>
    <Gauge/>
   </div>
  );
}
