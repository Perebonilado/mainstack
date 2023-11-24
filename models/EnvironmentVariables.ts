export interface EnvironmentVariables {
  development: EnvVar;
  production: EnvVar;
  test: EnvVar
}

interface EnvVar {
  baseUrl: string;
}
