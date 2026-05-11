// Fullscreen 3D canvas — explicitly no site header/footer here. The scene fills
// the entire viewport and provides its own HUD chrome.
export default function MemoryPalaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
