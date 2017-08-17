import React from 'react';

import '../resource/css/data.css';

class DataItem extends React.Component {

  render() {
    const {item, } = this.props;
    return (
      <div className="data-item" onClick={this.props.onClick}>
        <img className="data-item-img" src={item.get('thumbnail')} alt="资料图片" />
        <div className="data-item-content">
          <div className="data-name">{item.get('name')}</div>
        </div>
      </div>
    )
  }

}

export default DataItem;