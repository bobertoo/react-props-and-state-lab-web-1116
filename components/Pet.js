const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const { pet, isAdopted } = this.props;
    const { name, gender, type, age, weight } = pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">{ name } { gender == 'male' ? '♂' : '♀' }</a>
          <div className="meta">
            <span className="date">{ type }</span>
          </div>
          <div className="description">
            <p>{ age }</p>
            <p>{ weight }</p>
          </div>
        </div>
        <div className="extra content">
          { !isAdopted  ?
            <button className="ui primary button" onClick={this.clickHandler}>Adopt pet</button> :
            <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
