const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = places.map((place) => {
    return (
      <div>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}/>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
    </Def>
)
};

let places = [{
  name: 'Jolibee',
  city: 'Las Vegas',
  state: 'NV',
  cuisines: 'Filipino, American',
  pic: 'https://sa.kapamilya.com/absnews/abscbnnews/media/2015/business/11/02/jollibee-logo.jpg'
}, {
  name: 'Ichiza Izakaya',
  city: 'Las Vegas',
  state: 'NV',
  cuisines: 'Japanese',
  pic: 'https://lasvegastoppicks.com/wp-content/uploads/2013/02/003_3-600x400.jpg'
}]

module.exports = index