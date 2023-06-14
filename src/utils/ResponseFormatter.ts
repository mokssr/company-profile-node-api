const APIResponse = (
  message: string | null,
  data: object | object[] | null,
  success: boolean = true,
  meta: object = {}
) => {
  return JSON.stringify({
    success: success,
    message: message,
    data: data,
    meta: meta,
  });
};

export { APIResponse };
