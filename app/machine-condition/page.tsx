import History from "@/components/History";
import MCcondition from "@/components/MCcondition";

export default function Home() {
  return (
    <div className="h-screen flex gap-4">
        <History />
        <MCcondition />
    </div>
  );
}
