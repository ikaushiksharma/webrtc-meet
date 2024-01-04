export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}

export const metadata = {
  title: "Join Room",
};
