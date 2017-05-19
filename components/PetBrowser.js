const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map((pet, index) => {
      if (this.props.adoptedPets.indexOf(pet.id)) {
        return <Pet pet={ pet } key={ index } onAdoptPet={ this.props.onAdoptPet } isAdopted={ false } />;
      }
      else {
        return <Pet pet={ pet } key={ index } onAdoptPet={ this.props.onAdoptPet } isAdopted={ true } />;
      }
    });
    return (
      <div className="ui cards">
        { pets }
      </div>
    );
  }
}

module.exports = PetBrowser;
