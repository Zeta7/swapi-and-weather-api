import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dbClient = new DynamoDBClient(
  // {
  //   region: "us-east-1",
  //   endpoint: "http://localhost:8000",
  //   credentials: {
  //     accessKeyId: "fakeMyKeyId",
  //     secretAccessKey: "fakeSecretAccessKey",
  //   }
  // }
);
export const docClient = DynamoDBDocumentClient.from(dbClient);

export const CACHE_TABLE = process.env.CACHE_TABLE!;
export const HISTORY_TABLE = process.env.HISTORY_TABLE!;
export const PROFILE_DATA_TABLE = process.env.PROFILE_DATA_TABLE!;
export const USER_DATA_TABLE = process.env.USER_DATA_TABLE!;