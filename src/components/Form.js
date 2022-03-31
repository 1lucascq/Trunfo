import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      onInputChange,
      cardTrunfo,
      hasTrunfo,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="form-section">

        <form>
          <label htmlFor="cardName">
            Name:
            <input
              type="text"
              name="cardName"
              id="cardName"
              onChange={ onInputChange }
              value={ cardName }
              data-testid="name-input"
            />
          </label>

          <label htmlFor="cardDescription">
            Description:
            <input
              type="textarea"
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>

          <label htmlFor="cardAttr1">
            Strength:
            <input
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="cardAttr2">
            Equipment:
            <input
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="cardAttr3">
            Intelligence:
            <input
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="cardImage">
            Image:
            <input
              type="text"
              name="cardImage"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>

          <label className="rarity-label" htmlFor="cardRare">
            Rarity:
            <select
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="Normal">Normal</option>
              <option value="Rare">Rare</option>
              <option value="Very Rare">Very Rare</option>
            </select>
          </label>

          <div className="trunfo-label">
            {hasTrunfo ? (
              <span>Only one Top Trump allowed!</span>
            ) : (
              <label htmlFor="cardTrunfo">
                <span>Top Trump?</span>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="cardTrunfo"
                  id="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  data-testid="trunfo-input"
                />
              </label>
            )}
          </div>

          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Save
          </button>
        </form>
      </section>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
