import { AuthProvider } from "./providers/AuthProvider";
import { PageRoutes } from "./routes/pages";


const App = () => {
  return (
    <AuthProvider>
      <PageRoutes />
    </AuthProvider>

  )
}

export default App;