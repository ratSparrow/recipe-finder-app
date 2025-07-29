type FilterDropdownProps = {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

export const FilterDropdown = ({
  label,
  options,
  selected,
  onChange,
}: FilterDropdownProps) => {
  return (
    <div>
      <label className="text-sm block mb-1">{label}</label>
      <select
        className="p-2 border rounded w-full"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
