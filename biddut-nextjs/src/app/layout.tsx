
import "@/styles/index.scss";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 

      <head>
        <meta name="description" content="Biddut - Electricity Services Next js Template is a modern, clean and professional Next js template" />
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,800;9..40,900&display=swap"  
        />
      </head>

      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
