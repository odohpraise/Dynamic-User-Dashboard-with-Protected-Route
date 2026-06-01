import { AdminPanel } from "../../layout/components/AdminPanel"
import { EditorPanel } from "../../layout/components/EditorPanel"
import { ViewerPanel } from "../../layout/components/ViewerPanel"
import { useAuth } from "../../providers/AuthProvider"


export default function Dashboard() {
    const { user } = useAuth()

    if (!user) return <p>Please log in</p>

    if (user.role === "admin") return <AdminPanel />
    if (user.role === "editor") return <EditorPanel />

    return <ViewerPanel />
}
