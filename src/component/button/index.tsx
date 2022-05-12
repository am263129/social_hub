interface typeActionButton {
  title: string;
  icon: string;
  action: any;
}
export const ActionButton = (props: typeActionButton) => {
  const { icon, title, action } = props
  return (
    <button className="flex gap-2" onClick={action}>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </button>
  )
}

