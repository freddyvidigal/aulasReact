import React,{ Component } from "react";
import Feed from "./componets/Feed";
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, username: 'Frerderico', curtidas:10, comentarios:1},
        {id: 2, username: 'Nycollas', curtidas:110, comentarios:12},
        {id: 3, username: 'Grazzilayne', curtidas:1, comentarios:24},
        {id: 4, username: 'Nycksson', curtidas:330, comentarios:240},
      ]
    };

    }
 
  render(){
    return(
      <div>

          {this.state.feed.map((item)=>{
            return(
            <Feed id={item.id} username={item.username}
            curtidas={item.curtidas} comentarios={item.comentarios}
             />
            );
          })}

      </div>
    );
  }
}
export default App;