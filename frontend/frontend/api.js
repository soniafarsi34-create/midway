export async function getRoutes(from, to) {
  const res = await fetch(
    `/routes?from=${from}&to=${to}`
  );
  return res.json();
}
