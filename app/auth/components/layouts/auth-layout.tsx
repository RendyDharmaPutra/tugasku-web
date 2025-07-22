import { AuthFooter, AuthHeader } from "../containers";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 xl:px-8 py-12 flex justify-center items-center w-full h-screen bg-primary-background dark:bg-primary-background-dark">
      <div className="flex flex-col gap-8 justify-center w-full max-w-md h-full ">
        <AuthHeader
          title="Buat akun anda"
          description="Silahkan bergabung dengan kami hari ini"
        />
        {children}
        <AuthFooter
          route="/login"
          label="Sudah punya akun?"
          highlight="Login di sini"
        />
      </div>
    </div>
  );
};
