import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filters extends Component {
  render() {
    const {
      onFilterChange,
      filterCards,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.props;
    return (
      <section className="filters-section">
        <label htmlFor="filterRare">
          <span>Rarity:</span>
          <select
            name="filterRare"
            id="filterRare"
            value={ filterRare }
            onChange={ onFilterChange }
            data-testid="rare-filter"
          >
            <option value="todas">All</option>
            <option value="normal">Normal</option>
            <option value="raro">Rare</option>
            <option value="muito raro">Very Rare</option>
          </select>
        </label>

        <label htmlFor="filterName">
          <input
            className="name-search"
            type="text"
            name="filterName"
            placeholder="Type a card name to search"
            data-testid="name-filter"
            onChange={ onFilterChange }
            value={ filterName }
          />
        </label>

        {/* <div className="trunfo-label"> */}
        <label htmlFor="filterTrunfo">
          <span>Top Trump:</span>
          <input
            type="checkbox"
            name="filterTrunfo"
            id="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onFilterChange }
            data-testid="trunfo-filter"
          />
        </label>
        {/* </div> */}
        <button type="button" onClick={ filterCards }>
          Filter
        </button>
      </section>

    );
  }
}

Filters.propTypes = {
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterCards: PropTypes.func.isRequired,
};
