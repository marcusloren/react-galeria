import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    imagem: [],
  }

  componentDidMount() {
    this.obterLista();

  }

  obterLista = async () => {

    let url = 'https://api.myjson.com/bins/13t748';

    await fetch(url)
      .then(resposta => resposta.json())
      .then(img => {
        this.setState({
          imagem: img.data
        });
        //  console.log(this.state.imagem)


      })


  }



  render() {

    const list = [...this.state.imagem];

    return <div className="widget">
      {
        list.map((item, index) => {
          return (
            <div key={index}>
              <ul >{item.id}</ul>
              {
                item.lista.map((subitem) => {
                  return (
                    <img src={subitem.url} width="219" height="394" />
                  )
                })
              }
            </div>
          )
        })
      }


    </div>;
  }

}

export default App;
