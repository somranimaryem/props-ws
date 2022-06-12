import logo from './logo.svg'
import './App.css'
import Profile from './profile/Profile'

function App() {
  const onHandleAlert = () => {
    alert('This alert sends my name which is : Maryem ')
  }
  return (
    <div className="App">
      <Profile
        fullName={'Maryem Somrani'}
        bio={
          'Do elit irure eu minim non sint in. Laboris ut cupidatat ea consequat qui cillum aliqua ex qui sit minim mollit. Consectetur consequat ad incididunt exercitation. Anim nostrud do est tempor aute sunt anim laborum minim nulla minim proident amet sunt. Proident ipsum consequat eiusmod aliquip elit aute irure occaecat veniam. Ea ad officia officia laborum qui ad in laborum id reprehenderit tempor eiusmod anim pariatur.'
        }
        profession={'Full-stack dev'}
        alertFunction={onHandleAlert}
      >
        <img
          src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
          className="gallery-image"
          alt=""
        />
      </Profile>
    </div>
  )
}

export default App
