import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Home" }];
};

export default function Index() {
  return <div>hello</div>;
}
