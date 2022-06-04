
import React from 'react'

class WikiImage extends React.Component {

    constructor(){
        super()
        this.state = {
            imgUrl: ""
        }
    }

    componentDidMount(){
        this.getImage(this.props.url, this.props.size)
    }
    
    getImage(url, size = 150){
    var slika=url.split('/').pop();
    var link="https://en.wikipedia.org/w/api.php?action=query&titles=" + slika + "&prop=pageimages&format=json&formatversion=2&origin=*&pithumbsize=" + size;
    fetch(link)
    .then(results => results.json())
    .then(data => this.setState({ imgUrl: data.query.pages[0].thumbnail.source}))
    .catch(() => {return <div />})
    }
    render(){
    
    
    return(
        <img src={this.state.imgUrl || './../img/200.png'} alt="wiki"/>
    );
    }
}

export default WikiImage;