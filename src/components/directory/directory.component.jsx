import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: 2,
          linkUrl: ""
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1474432420717-75023248d5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: 3,
          linkUrl: ""
        },
        {
          title: "Womens",
          imageUrl:
            "https://images.unsplash.com/photo-1551351731-8e3efad58b36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "Mens",
          imageUrl:
            "https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
