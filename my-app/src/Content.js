
import data from './films.json'

const dataOfProducts = data.data.episodes.results
console.log(dataOfProducts)


const Person = ({character: {id, image, name, gender}}) => {
  return(
  <>
    <div class="person" key={id}>
      {name}
      <img src = {image}/>
    </div>
  </>
  )
}
const Episode = ({product: {id, name, date, characters}}) => 
    <div className='episode' >
      <h1>{name}</h1>
      <strong>{date}</strong>
      <div class="persons">{characters.map( character => 
       <Person key={id} character={character}></Person>
      )}
      </div>
    </div>

const Episodes = ({products = dataOfProducts}) => 
    <div className="Episodes">
      {products.map((product) =>  <Episode key = {product.id}   product = {product} />)}
    </div>

export default Episodes