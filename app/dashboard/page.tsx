export const dynamic = 'force-dynamic' // Force SSR on every request

export default async function DashboardPage() {
  const now = new Date().toLocaleTimeString()

  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold mb-2">📊 Dashboard</h2>
      <p>This page is server-rendered. Current time: <strong>{now}</strong></p>
    </div>
  )
}
