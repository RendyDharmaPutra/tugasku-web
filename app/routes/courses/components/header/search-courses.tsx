import { TextField } from "~/components/forms";

interface SearchCoursesProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchCourses = (props: SearchCoursesProps) => {
  return (
    <div className="flex items-center w-full h-fit ">
      <TextField
        placeholder="Cari Kursus"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
      />
    </div>
  );
};
