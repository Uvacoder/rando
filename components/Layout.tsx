interface Props {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <main>{children}</main>
      <style jsx global>{`
        html {
          font: 125%/1.5 system-ui, -apple-system, sans-serif;
        }

        @media (prefers-color-scheme: dark) {
          html {
            color: #fefefe;
            background-color: #222;
          }
        }

        input,
        button {
          font: inherit;
        }

        button {
          background-color: rgba(128, 128, 128, 0.15);
          padding: 0.25em 0.5em;
          border-radius: 0.25em;
          border: none;
          cursor: pointer;
        }

        input {
          border-radius: 0.25em;
          border: 1px solid rgba(128, 128, 128, 0.3);
          padding: 0.25em 0.5em;
        }
      `}</style>
      <style jsx>{`
        main {
          margin: 0 auto;
          padding: 1.5rem;
          max-width: 30rem;
        }
      `}</style>
    </>
  )
}