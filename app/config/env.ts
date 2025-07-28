function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return value;
}

export const env = {
  SUPABASE_URL: getEnvVar("SUPABASE_URL"),
  SUPABASE_KEY: getEnvVar("SUPABASE_KEY"),
};
