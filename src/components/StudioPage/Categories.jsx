import React from 'react';
import { Link } from 'react-router-dom';
import s from './Studio.module.scss';

export default class Categories extends React.PureComponent {
  state = {
    selected: {}
  };

  setSelectedChild(key, child) {
    this.setState((state) => ({
      selected: {
        ...state.selected,
        [key]: child,
      }
    }));
  }

  render() {
    const categories = this.props.items.map((item) => {
      const selectedChild = this.state.selected[item.id] || item.children[0];
      const sampleImage = require(`@/content/categories/${selectedChild.id}/sample.jpg`);

      return <div key={item.id} className={s.block}>
        <div>
          <h2>{item.title}</h2>
          <ul>{item.children.map((child) => (
            <li key={child.id} onMouseOver={() => this.setSelectedChild(item.id, child)}>
              <Link to={`/service/${child.id}`}>{child.title}</Link>
            </li>
          ))}</ul>
        </div>
        <div>
          <img src={sampleImage} width="224" alt={item.title} />
        </div>
      </div>
    });

    return <>{categories}</>;
  }
}
