import { GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, USER_DATA_TABLE } from "../config/dynamo.config";

export const getUserByEmail = async (email: string) => {
  const res = await docClient.send(new GetCommand({
    TableName: USER_DATA_TABLE,
    Key: { id: email }
  }));
  return res.Item as any;
};

export const saveUser = async (user: User) => {
  await docClient.send(new PutCommand({
    TableName: USER_DATA_TABLE,
    Item: user
  }));
};

type User = {
  id: string;
  password: string;
  createdAt: number;
  uuid: string;
};