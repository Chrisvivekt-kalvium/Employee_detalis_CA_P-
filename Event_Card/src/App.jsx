import EventCard from './components/EventCard'
import './App.css'

function App() {
 const Event = [
  {
    id:1,
    Event_Name:'Music Concert',
    Event_Date:'12/04/2025',
    Location : 'Bangaore',
    Short_discription:'Music Concert in Bangalore',
  },
{
    id:2,
    Event_Name:'Holi Concert',
    Event_Date:'14/02/2025',
    Location : 'Bangaore',
    Short_discription:'Holi Concert in Bangalore',

},
{
    id:3,
    Event_Name:'Beach Drive',
    Event_Date:'12/05/2025',
    Location : 'Mangalore',
    Short_discription:'Beach Party in Mangalore',
}
]

  return (
    <>
      <h1>Event discription</h1>
      {
        Event.map((Post) => (
          <EventCard key={Post.id} Event_Name={Post.Event_Name} Event_Date={Post.Event_Date} Location={Post.Location} Short_discription={Post.Short_discription} />
        ))
      }
    </>
  )
}

export default App
