export class HttpError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = "HttpError";
  }
}
export function parseId(value: unknown): number {
  if (typeof value !== "string" || !/^[1-9][0-9]*$/.test(value)) {
    throw new HttpError(400, "ID must be a positive integer");
  }
  const id = Number(value);
  if (!Number.isSafeInteger(id)) throw new HttpError(400, "Invalid ID");
  return id;
}
