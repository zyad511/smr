import fetch from "node-fetch";

export async function getScripts() {
  const res = await fetch(
    "https://rscripts.net/api/v2/scripts?page=1&orderBy=date&sort=desc"
  );
  return res.json();
}
