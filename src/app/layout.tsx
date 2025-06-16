<<<<<<< HEAD
// app/layout.tsx
export default function RootBaseLayout({
=======
import "./globals.css";

export default function RootLayout({
>>>>>>> f281148 (Revert "Merge pull request #10 from FAIRBRAND/feature/header")
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html>
=======
    <html lang="en">
>>>>>>> f281148 (Revert "Merge pull request #10 from FAIRBRAND/feature/header")
      <body>{children}</body>
    </html>
  );
}
