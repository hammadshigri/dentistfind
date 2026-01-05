import { PracticeSummaryCard } from "./components/PracticeSummaryCard";
import { mockPractices } from "./data/mockData";

/**
 * Main App component
 * Displays practice summary cards in a responsive grid layout
 * Desktop: Cards displayed in a grid (3 columns)
 * Mobile: Cards stack vertically and span full width
 */
function App() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Practice Summary Dashboard
          </h1>
          <p className="text-gray-600">
            Overview of dental practice performance metrics
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPractices.map((practice) => (
            <PracticeSummaryCard key={practice.id} practice={practice} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
