export async function GET() {
  try {
    const response = await fetch("https://status.bliss.surf/status")
    const data = await response.json()
    return Response.json(data)
  } catch {
    return Response.json({ error: "failed to fetch" }, { status: 500 })
  }
}
