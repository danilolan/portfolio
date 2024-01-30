export function nameToPath(name: string): string {
  return name.replace(/\s/g, "-").toLowerCase();
}
