import { EnvironmentVariables } from "../models/EnvironmentVariables";

const envVariables: EnvironmentVariables = {
  test: { baseUrl: "https://fe-task-api.mainstack.io" },
  development: { baseUrl: "https://fe-task-api.mainstack.io" },
  production: { baseUrl: "https://fe-task-api.mainstack.io" },
};

export const getEnvironmentVariable = () => {
  const env = process.env.NODE_ENV;

  return envVariables[env];
};

export const apiTimeOutInMs = 30000

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]
