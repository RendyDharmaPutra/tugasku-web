import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu - Login" }];
};

export default function LoginPage() {
  return <h1>Login Page</h1>;
}
