export function handleErrors(responseData: string | object): boolean {
  return typeof responseData === 'string';
}
