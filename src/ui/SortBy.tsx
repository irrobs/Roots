import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select value={sortBy} onChange={handleChange}>
      <option value="recent">Mais recentes</option>
      <option value="old">Mais antigos</option>
    </Select>
  );
}
