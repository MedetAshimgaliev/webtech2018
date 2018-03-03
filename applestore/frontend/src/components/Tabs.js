import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Tablets from '../Tablets';
import Computers from '../Computers';
import Smartphones from '../Smartphones';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Smartphones" value={0} />
          <Tab label="Tablets" value={1} />
          <Tab label="Computers" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>The Smartest Phones</h2>  
            <Smartphones />
          </div>
          <div style={styles.slide}>
          <h2 style={styles.headline}>The Greatest Tablets</h2>
            <Tablets />
          </div>
          <div style={styles.slide}>
          <h2 style={styles.headline}>The Bravest Computers</h2>
            <Computers />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}