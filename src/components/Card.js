import React from 'react';
import PropTypes from 'prop-types';
import rarityStar from '../assets/rarity-star.png';
import trumpStar from '../assets/trump-star.png';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteCard,
    } = this.props;
    return (
      <section className="card-section">

        <div className="top-card-div">
          <div className="star-container">
            <img src={ rarityStar } className="rarity-stars" alt="trump star icon" />
            <img src={ trumpStar } className="trump-star" alt="trump star icon" />
          </div>
          <div className="name-container">
            <h2 data-testid="name-card">{cardName}</h2>
          </div>

          <img src={ cardImage } alt={ `${cardName} card` } data-testid="image-card" />
        </div>

        <div className="attr-div">
          <h4>Description:</h4>
          <p data-testid="description-card">
            {' '}
            {cardDescription}
          </p>
          <p data-testid="attr1-card">{`Strength: ${cardAttr1}`}</p>
          <p data-testid="attr2-card">{`Equipment: ${cardAttr2}`}</p>
          <p data-testid="attr3-card">{`Intelligence: ${cardAttr3}`}</p>
        </div>

        <div>
          <p data-testid="rare-card">{`Rarity: ${cardRare}`}</p>
        </div>

        <div>{cardTrunfo && <p data-testid="trunfo-card">Top Trump</p>}</div>
        {deleteCard && (
          <button
            type="button"
            onClick={ deleteCard }
            data-testid="delete-button"
          >
            Delete
          </button>
        )}
      </section>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  deleteCard: null,
};

export default Card;
