/**
 * Listing id from an npm name: "@acme/zentic-dracula" -> "dracula", "zentic-defer" -> "defer".
 * Packages published under the upstream "paseo" prefix are stripped the same way.
 */
export function deriveId(packageName: string): string {
  const [scope, bare] = packageName.startsWith("@")
    ? packageName.slice(1).split("/")
    : [undefined, packageName];
  const stripped = bare
    .replace(/^(?:zentic|paseo)-plugin-/, "")
    .replace(/^(?:zentic|paseo)-/, "")
    .replace(/-(?:zentic|paseo)-plugin$/, "")
    .replace(/-(?:zentic|paseo)$/, "")
    .replace(/-plugin$/, "")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/^-+|-+$/g, "");
  if (stripped && stripped !== "plugin" && stripped !== "zentic" && stripped !== "paseo") return stripped;
  return (scope ?? bare).replace(/[^a-z0-9-]/g, "-");
}
