export default function Box({ children, className, filled = false }) {

  return (

    <div className={`

      ${filled ? "bg-zinc-800/60" : "bg-transparent"}
      border border-minecraft-green
      rounded-lg
      p-6
      ${className}
    `}>
      {children}
    </div>
  )
}