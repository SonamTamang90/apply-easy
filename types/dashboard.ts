export interface TableRow {
  id: number
  header: string
  type: string
  status: "Done" | "In Process"
  target: string
  limit: string
  reviewer: string
}

export interface NavItem {
  title: string
  url: string
  icon?: React.ComponentType<{ className?: string }>
  isActive?: boolean
  items?: NavSubItem[]
}

export interface NavSubItem {
  title: string
  url: string
}

export interface UserData {
  name: string
  email: string
  avatar: string
}

export interface DocumentItem {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}
