const colors = {
  yellow: 'var(--color-minecraft-yellow)',
  red: 'var(--color-minecraft-red)',
  blue: 'var(--color-minecraft-blue)',
  green: 'var(--color-minecraft-green)',
}

export default function HomeBox({
  color,
  image,
  width = 'w-40',
  height = 'h-40',
  ml = '',
  className = '',
  children,
}) {
  return (
    <div
      className={`${width} ${height} ${ml} ${className} rounded-lg`}
      style={{
        backgroundColor: colors[color] ?? color ?? undefined,
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  )
}