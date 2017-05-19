const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);
  }

  onFindPetsClick() {
    let url = '/api/pets';
    if (this.state.filters.type != 'all') {
      url += `?type=${this.state.filters.type}`;
    }
    fetch(url).then(function(response) {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).then((out) => {
      this.setState({
        pets: out
      });
    }).catch(err => console.error(err));
  }

  onAdoptPet(petID) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petID]
    });
  }

  onChangeType(type) {
    this.setState({
      filters: {type: type}
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={ this.onFindPetsClick }
                onChangeType={ this.onChangeType }
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets } onAdoptPet={ this.onAdoptPet } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
