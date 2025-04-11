
import { TopBar } from "./components/TopBar";
import { MainHeader } from "./components/MainHeader";
import { SearchAndCategories } from "./components/SearchAndCategories";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <MainHeader />
      <SearchAndCategories />
      <div className="flex-1 p-4">
        {/* Main Content Area */}
      </div>
    </div>
  );
}