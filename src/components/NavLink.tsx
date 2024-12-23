interface NavLinkProps {
  label: string;
  targetId: string;
  onClick: (id: string) => void;
}

export function NavLink({ label, targetId, onClick }: NavLinkProps) {
  return (
    <li>
      <button onClick={() => onClick(targetId)}>{label}</button>
    </li>
  );
}
