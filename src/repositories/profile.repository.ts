import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, PROFILE_DATA_TABLE } from "../config/dynamo.config";

export const saveProfileData = async (item: any) => {
  await docClient.send(new PutCommand({ TableName: PROFILE_DATA_TABLE, Item: item }));
};
