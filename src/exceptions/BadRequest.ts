class BadRequest extends Error {
  status: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "BadRequestError";
    this.status = status ?? 400;
  }
}

export default BadRequest;
