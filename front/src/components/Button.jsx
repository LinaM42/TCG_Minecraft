export default function Button({ children, onClick, variant = 'primary' }) {
  const styles = {
    primary: 'bg-minecraft-green text-black hover:bg-lime-500',
    outline: 'bg-transparent text-white border border-minecraft-green hover:bg-white/10',
  }

  return (
    <button
      onClick={onClick}
      className={`md:px-8 px-4 py-2 font-bold rounded-sm text-sm uppercase ${styles[variant]}`}
    >
      {children}
    </button>
  )
}