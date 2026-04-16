export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he">
      <body style={{ fontFamily: "Arial", margin: 0, padding: 20 }}>
        <h1>🏃‍♂️ Running Workout Builder</h1>
        {children}
      </body>
    </html>
  );
}
