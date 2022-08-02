import dataPersons from './persons.json'

const dataOfProducts = dataPersons.data.characters.results
console.log('==>',dataOfProducts.map(e =>console.log(e)))

const Person = ({person : {name, gender, image, episode}}) =>
  <div class="person">
    <img src = {image}/>
    <div class="info">
      <p class="name">{name}</p>
      <p class="gender">{gender}</p>
      <ul class="listOfEpisodes"> {episode.map( episode => 
        <li key={episode.id}>{episode.name}{episode.air_date}</li>
        )}
      </ul>
    </div>
  </div>

const Persons = ({persons = dataOfProducts}) =>
    <div class="persons">
      {persons.map(person =>  <Person key = {person.id} person = {person} />)}
    </div>

export default Persons

