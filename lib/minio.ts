import { Client } from "minio";

export const minio = new Client({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,

  accessKey: "admin",
  secretKey: "admin12345",
});