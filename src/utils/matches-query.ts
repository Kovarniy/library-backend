export function matchesQuery(value: string, query: string): boolean {
  if (!query) return true;
  return value
    .trim()
    .toLocaleLowerCase()
    .includes(query.trim().toLocaleLowerCase());
}
