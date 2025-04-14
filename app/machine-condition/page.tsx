import History from "@/components/History";
import MCcondition from "@/components/MCcondition";
import WeightTable from "@/components/WeightTable";

export default function machineCondition() {
  return (
    <div className="h-screen flex gap-2">
      <History />
      <div className="h-screen w-full flex-col">
        <MCcondition />
        <WeightTable />
      </div>
    </div>
  );
}
