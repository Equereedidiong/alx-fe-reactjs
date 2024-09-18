import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  <UserContext.Provider value = {userData}>
  <ProfilePage />
</UserContext.Provider>


  return (


  ) 
}

export default App;