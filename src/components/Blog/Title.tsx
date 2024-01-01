export default function Title({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <h1 className="text-3xl my-8">{children}</h1>
  )
}
