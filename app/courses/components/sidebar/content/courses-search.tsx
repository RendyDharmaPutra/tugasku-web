import { TextInput } from "~/components/forms";

interface CoursesSearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const CoursesSearch = (props: CoursesSearchProps) => {
  return (
    <div className="flex items-center w-full h-fit ">
      <TextInput
        placeholder="Cari Kursus"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
      />
    </div>
  );
};
