export const metadata = {
  title: "Chops by Nefo - Content Studio",
  description: "Content management for Chops by Nefo",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
