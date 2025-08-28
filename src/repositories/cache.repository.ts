import { GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { CACHE_TABLE, docClient } from "../config/dynamo.config";

export const getCache = async (cacheKey: string) => {
  const res = await docClient.send(new GetCommand({
    TableName: CACHE_TABLE,
    Key: { cacheKey }
  }));
  return res.Item as any;
};

export const putCache = async (cacheKey: string, data: any, expiresAt: number) => {
  await docClient.send(new PutCommand({
    TableName: CACHE_TABLE,
    Item: { cacheKey, data, expiresAt, createdAt: Math.floor(Date.now() / 1000) }
  }));
};