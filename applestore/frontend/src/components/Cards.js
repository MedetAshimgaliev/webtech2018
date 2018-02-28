import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';



const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    },
    titleStyle: {
      color: 'rgb(0, 188, 212)',
    },
  };
  
  const tilesData = [
    { 
      img: 'https://pp.userapi.com/c841328/v841328702/73cad/8v-OQyGq9EU.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      img: 'https://pp.userapi.com/c841328/v841328702/73c9f/krGUn8XWmWU.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      img: 'https://pp.userapi.com/c841328/v841328702/73ca6/_39uAxN7HTs.jpg',
      title: 'Vegetables',
      author: 'jill111',
    },
    {
      img: 'https://pp.userapi.com/c841328/v841328702/73c98/hS_EagmaxqA.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
    {
      img: 'https://pp.userapi.com/c841328/v841328702/73c98/hS_EagmaxqA.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
  ];

class Cards extends Component{
    render(){
        return(
            <div style={styles.root}>
                <GridList style={styles.gridList} cols={2.2}>
                {tilesData.map((tile) => (
                    <GridTile
                    key={tile.img}
                    title={tile.title}
                    actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                    titleStyle={styles.titleStyle}
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >
                    <img src={tile.img} />
                    </GridTile>
                ))}
                </GridList>
            </div>
        );
    }
}

export default Cards;