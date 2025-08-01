export const SearchBar = ({ searchTerm, setSearchTerm }: any) => (
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search for recipes..."
    className="p-3 border rounded-md w-full mt-5 shadow-sm focus:outline-none"
  />
);
