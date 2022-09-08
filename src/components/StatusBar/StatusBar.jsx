import React, { Component } from 'react'
import './StatusBar.css'
import Avatar from '@mui/material/Avatar';
import statusimg from '../../images/pp1.png';

export default class StatusBar extends Component {
    constructor(props) {
        super();
        this.state = {
            statusList:[]
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData =()=>{
        let data = [


            {
              "username":"omolola",
              "imgUrl":"../../images/pp1.png"
              },
              {
              "username":"Aisha",
              "imgUrl":"../../images/pp1.png"
  
              },
              {
                "username":"Lekan",
                "imgUrl":"../../images/pp1.png"
                },
                {
                "username":"mariam",
                "imgUrl":"../../images/pp1.png"
    
                },
                {
                  "username":"Lekan",
                  "imgUrl":"../../images/pp1.png"
                  },
                  {
                  "username":"mariam",
                  "imgUrl":"../../images/pp1.png"
      
                  },
                  {
                    "username":"Lekan",
                    "imgUrl":"../../images/pp1.png"
                    },
                    {
                    "username":"mariam",
                    "imgUrl":"../../images/pp1.png"
        
                    }
                    
                  
                  
        ]
        this.setState({statusList:data});
    }

  render() {
    return (
      <div >
          <div className='statusbar_container'>
              { 
              this.state.statusList.map((item, index)=>(
                
              <div className='status'>
                <Avatar className='statusbar_status' src={statusimg}/>
                <div className='statusbar_text'>{item.username} </div>
              </div>
              ))
           }
           

              
          </div>

      </div>
    )
  }
}
