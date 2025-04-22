import History from "@/components/History";
import Allcondition from "@/components/Allcondition";
export default function Documentrecord_1() {
  return (
    <div className="h-screen flex gap-2">
      <History url="/api/history" />
      <div className="h-screen w-full flex-col">
        <Allcondition
          dataUrl="/api/temp"
          statusUrlBase="/api/status-actual/"
          graphUrlBase="/api/bz-line/"
          gaugeUrlBase="/api/gauge-temp/"
          onoffUrlBase="/api/status-temp"
        />
      </div>
    </div>
  );
}
