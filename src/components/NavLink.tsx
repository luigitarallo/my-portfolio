interface NavLinkProps {
  label: string;
  targetId: string;
  onClick: (id: string) => void;
  isActive: boolean;
}

export function NavLink({ label, targetId, onClick, isActive }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(targetId);
    // Rimuove il focus dal button dopo il click (fix per mobile)
    e.currentTarget.blur();
  };

  return (
    <li>
      <button onClick={handleClick} className={isActive ? "active" : ""}>
        {label}
      </button>
    </li>
  );
}
