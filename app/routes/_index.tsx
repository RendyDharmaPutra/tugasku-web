import { redirect, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Home" }];
};

export async function loader() {
  return redirect("/dashboard");
}

export default function Index() {
  return <div>hello</div>;
}
