
import './App.css'
import EmployeeCard from './components/EmployeeCard'

function App() {
  const employee = [
    {
      id:1,
      img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Ffemale-employee&psig=AOvVaw3niuMHnxC-GHVx3H2bIa4Y&ust=1741604635168000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjZ44Ht_IsDFQAAAAAdAAAAABAQ',
      Name:'Sarah',
      Job:'CEO',
      Department:'Finance',
      Email:'Sarah@gmail.com',
    },
    {
      id:2,
      img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fbeautiful-office-girl&psig=AOvVaw3niuMHnxC-GHVx3H2bIa4Y&ust=1741604635168000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjZ44Ht_IsDFQAAAAAdAAAAABAY',
      Name: 'John',
      Job:'Manager',
      Department:'Marketing',
      Email:'John@johnson.com',
    },
  ]
 

  return (
    <>
      <h1>Employee Details</h1>
      <div>
        {employee.map((data) => (
          <EmployeeCard key={data.id} img={data.img} Name={data.Name}  Job={data.job} Department={data.Department} Email={data.Email}/>
        ))}
        </div>  
    </>
  )
}

export default App
