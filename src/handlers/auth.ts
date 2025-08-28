import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export const handler = async (event: any) => {
  try {
    const token = event.authorizationToken?.replace("Bearer ", "");
    if (!token) throw new Error("No token provided");

    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };

    return {
      principalId: decoded.email,
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          { Action: "execute-api:Invoke", Effect: "Allow", Resource: event.methodArn },
        ],
      },
      context: { email: decoded.email },
    };
  } catch {
    return {
      principalId: "unauthorized",
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          { Action: "execute-api:Invoke", Effect: "Deny", Resource: event.methodArn },
        ],
      },
    };
  }
};
