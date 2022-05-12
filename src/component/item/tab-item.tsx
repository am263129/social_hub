interface typeTab {
  title: string;
  icon: string;
  id: number;
}

interface typeTabItem {
  currentTab: number;
  select: any;
  tab: typeTab;
  className?: string;
}
const TabItem = (props: typeTabItem) => {
  const { currentTab, tab, className, select } = props

  return (
    <button className={`${className} w-full py-4 flex items-center justify-center gap-2 rounded-lg ${tab.id === currentTab ? "bg-app-gray-light bg-opacity-10" : ""}`} onClick={() => select(tab.id)}>
      <img src={tab.icon} alt={tab.title} />
      <p className="text-app-gray-light opacity-60">{tab.title}</p>
    </button>
  )
}

export default TabItem