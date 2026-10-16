import { useState, useEffect } from 'react';
import StudentCard from './components/StudentCard';

// Offline fallback data in case college network blocks outside APIs
const fallbackStudents = [
  {
    id: 1,
    name: 'Mayuri Vaishnav',
    username: 'mayuri29',
    email: 'mayuri@example.com',
    phone: '+91 98765 43210',
    city: 'Ahmedabad',
    branch: 'B.Tech Computer Science',
    website: 'github.com/mayuri2907',
  },
  {
    id: 2,
    name: 'Aarav Sharma',
    username: 'aarav_s',
    email: 'aarav.sharma@example.com',
    phone: '+91 98234 11223',
    city: 'Surat',
    branch: 'Information Technology',
    website: 'aarav.dev',
  },
  {
    id: 3,
    name: 'Pooja Patel',
    username: 'pooja_p',
    email: 'pooja.patel@example.com',
    phone: '+91 97123 44556',
    city: 'Vadodara',
    branch: 'Computer Science & AI',
    website: 'poojapatel.me',
  },
  {
    id: 4,
    name: 'Rohan Mehta',
    username: 'rohan_m',
    email: 'rohan.mehta@example.com',
    phone: '+91 99887 66554',
    city: 'Rajkot',
    branch: 'BCA (Software Dev)',
    website: 'rohanmehta.in',
  },
  {
    id: 5,
    name: 'Sneha Kulkarni',
    username: 'sneha_k',
    email: 'sneha.k@example.com',
    phone: '+91 98451 22334',
    city: 'Pune',
    branch: 'Data Science',
    website: 'snehak.net',
  },
  {
    id: 6,
    name: 'Vikram Singh',
    username: 'vikram_s',
    email: 'vikram.singh@example.com',
    phone: '+91 96543 88990',
    city: 'Jaipur',
    branch: 'Cybersecurity',
    website: 'vikramsec.org',
  },
];

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataSource, setDataSource] = useState('');

  // READ OPERATION: Fetch students from API using fetch()
  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      // Dummy API endpoint for student/user records
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStudents(data);
      setDataSource('jsonplaceholder.typicode.com/users (Live REST API)');
    } catch (err) {
      console.warn('API fetch failed or offline, loading fallback student records:', err.message);
      // Seamless offline fallback so practical works anywhere
      setStudents(fallbackStudents);
      setDataSource('Local Offline Mock Dataset (Network Unavailable)');
    } finally {
      setLoading(false);
    }
  };

  // Trigger READ operation when component mounts
  useEffect(() => {
    fetchStudents();
  }, []);

  // Filter students based on search input
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-slate-800">
              StudentDirectory<span className="text-teal-700">.</span>
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
              U5-PRAC 2
            </span>
          </div>
          <span className="text-xs font-medium text-slate-500">
            CRUD: Read Operation with fetch() API
          </span>
        </div>
      </header>

      {/* Lab Banner */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-600 gap-1">
          <div>
            <span className="font-semibold text-slate-800">Practical 7 (Unit 5 Prac 2):</span> Student List (Read Operation via fetch & map)
          </div>
          <div className="text-teal-700 font-medium">
            ● Unit 5 – CRUD Operations
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Intro & Search Filter */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-800 rounded border border-teal-200">
                Action: READ (GET)
              </span>
              <h1 className="text-2xl font-bold text-slate-800 mt-2">
                Registered Students Directory
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Data source: <span className="font-mono text-slate-700">{dataSource || 'Loading...'}</span>
              </p>
            </div>

            <button
              onClick={fetchStudents}
              className="px-4 py-2 bg-slate-800 text-white rounded-md text-xs font-medium hover:bg-slate-900 transition flex items-center space-x-1.5 self-start sm:self-auto"
            >
              <span>↻</span>
              <span>Refresh Records</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <input
              type="text"
              placeholder="🔍 Search students by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>
        </div>

        {/* State: Loading */}
        {loading && (
          <div className="bg-white p-12 rounded-xl border border-slate-200 text-center space-y-3">
            <div className="inline-block w-8 h-8 border-4 border-teal-700 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-slate-600">Retrieving student records from API...</p>
          </div>
        )}

        {/* State: Error */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            Failed to fetch records: {error}
          </div>
        )}

        {/* State: Records Found (Rendered via map()) */}
        {!loading && !error && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase">
                Showing {filteredStudents.length} of {students.length} Students
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Component Mapping: &lt;StudentCard /&gt;
              </span>
            </div>

            {filteredStudents.length === 0 ? (
              <div className="bg-white p-12 rounded-xl border border-slate-200 text-center text-slate-500 text-sm">
                No student matched your search query "{searchTerm}".
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredStudents.map((student) => (
                  <StudentCard key={student.id} student={student} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        React Practical 7 (Unit 5 Prac 2) | CRUD: Read Operation with fetch() API
      </footer>
    </div>
  );
}

export default App;
