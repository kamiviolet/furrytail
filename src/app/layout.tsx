export const metadata = {
  title: "FurryTail",
  description: "Simple application by Next & TypeScript all about furry beasts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
