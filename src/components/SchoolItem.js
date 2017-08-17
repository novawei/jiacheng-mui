import React from 'react';

import '../resource/css/school.css';

class SchoolItem extends React.Component {

	render() {
    const {item, } = this.props;
		return (
			<div className="school-item" onClick={this.props.onClick}>
        <img className="school-item-img" src={item.get('jxPicture')} alt="驾程图片" />
        <div className="school-item-content">
          <div className="school-name">{item.get('name')}</div>
          <div className="school-price">¥{item.get('lowestPrice')}<span className="school-gray-text">起</span></div>
          <div className="school-hongbao">
            ¥{item.get('redPaper')}驾程补贴
            <span className="school-gray-text">（只限驾程推广）</span>
          </div>
          <div className="school-address">{item.get('address')}</div>
        </div>
        <div className="school-item-border"/>
      </div>
		)
	}

}

export default SchoolItem;