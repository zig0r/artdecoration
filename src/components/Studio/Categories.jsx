import React from 'react';
import { Link } from 'react-router-dom';
import s from '../Studio/Studio.module.scss';

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
      const selectedChild = this.state.selected[item.name] || item.children[0];
      return <div key={item.name} className={s.block}>
        <div>
          <h2>{item.title}</h2>
          <ul>{item.children.map((child) => (
            <li key={child.name} onMouseOver={() => this.setSelectedChild(item.name, child)}>
              <Link to={`/service/${child.name}`}>{child.title}</Link>
            </li>
          ))}</ul>
        </div>
        <div>
          <img alt="decor" src={require(`@/img/categories/${selectedChild.name}.jpg`)} width="224" />
        </div>
      </div>
    });

    return <>{categories}</>;
  }
}