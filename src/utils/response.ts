export const success = (statusCode: number, data: any) => ({
  statusCode,
  body: JSON.stringify({ success: true, data }),
});

export const failure = (statusCode: number, message: string, details?: any) => ({
  statusCode,
  body: JSON.stringify({
    success: false,
    message,
    ...(details ? { details } : {}),
  }),
});
