'use strict';

const _ = require('lodash');
const React = require('react');

/**
 * Component for the name column.
 */
class NameColumn extends React.Component {

  /**
   * The component constructor.
   *
   * @param {Object} props - The properties.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render the name column.
   *
   * @returns {React.Component} The name column.
   */
  render() {
    let fields = _.map(this.props.index.fields.serialize(), (field) => {
      return this.renderField(field);
    });
    return (
      <td className='name-column'>
        <div className='name'>
          {this.props.index.name}
        </div>
        <div>
          <p className='definition'>
            {fields}
          </p>
        </div>
      </td>
    );
  }

  /**
   * Render the direction of the index field.
   *
   * @param {Object} field - The field.
   *
   * @returns {React.Component} The field component.
   */
  renderDirection(field) {
    if (field.value === 1) {
      return (
        <span className='sort'>
          <i className='fa fa-arrow-circle-up fa-lg' />
        </span>
      );
    } else if (field.value === -1) {
      return (
        <span className='sort'>
          <i className='fa fa-arrow-circle-down fa-lg' />
        </span>
      );
    } else {
      return (
        <span className='type'>
          {field.value}
        </span>
      );
    }
  }

  /**
   * Render a field in an index.
   *
   * @param {Object} field - The field.
   *
   * @returns {React.Component} The field component.
   */
  renderField(field) {
    return (
      <span key={field.field} className='pair'>
        <span className='field'>
          {field.field}
          {this.renderDirection(field)}
        </span>
      </span>
    );
  }
}

NameColumn.displayName = 'NameColumn';

NameColumn.propTypes = {
  index: React.PropTypes.object.isRequired
};

module.exports = NameColumn;