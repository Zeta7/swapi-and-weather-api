import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, HISTORY_TABLE } from "../config/dynamo.config";


export const putHistory = async (item: { id: string; createdAt: number; payload: any }) => {
  await docClient.send(new PutCommand({
    TableName: HISTORY_TABLE,
    Item: { pk: "FUSION_HISTORY", createdAt: item.createdAt, id: item.id, payload: item.payload }
  }));
};

export const queryHistory = async (limit = 10, lastKey?: any) => {
  const params: any = {
    TableName: HISTORY_TABLE,
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: { ":pk": "FUSION_HISTORY" },
    Limit: limit,
    ScanIndexForward: false
  };
  if (lastKey) params.ExclusiveStartKey = lastKey;
  return docClient.send(new QueryCommand(params));
};