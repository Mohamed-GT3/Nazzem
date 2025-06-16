import CustomAvatar from "./custom-avatar";

type Props ={
    name: string,
    avatarUrl?: string;
    shape?: 'circle' | 'square';
}
const SelectOptionWithAvatar = ({ avatarUrl, name, shape }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <CustomAvatar />
        
    </div>
  )
}

export default SelectOptionWithAvatar