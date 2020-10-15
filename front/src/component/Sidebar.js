import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from '../logo.svg';
import { object } from 'yup';
const StyledSideNav = styled.div`   
    
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 110px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 0em;      /* Stay at the top */
    background-color: #2196F3!important; /* Black */
    padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        let user = window.localStorage.getItem("logedin")
        const obj = JSON.parse(user);
        if(obj["role"]==="admin"){
          this.state = {
            activePath: props.location.pathname,
          
            items: [
              {
                path: '/', /* path is used as id to check which NavItem is active basically */
                
                css: 'Logo',
                key: 0 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
              },  
              {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'Accueil',
                  css: 'fa fa-fw fa-home',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/salarie',
                    name: 'Salarie',
                    css: 'fa fa-fw fa-user',

                    key: 2
                  },
                  {
                    path: '/diplome',
                    name: 'Diplome',
                    css: 'fa fa-fw fa-user',
                    key: 3
                  },
                  {
                    path: '/formation',
                    name: 'Formation',
                    css: 'fa fa-fw fa-user',
                    key: 4
                  },
                  {
                    path: '/grade',
                    name: 'Grade',
                    css: 'fa fa-fw fa-user',
                    key: 5
                  },
                  {
                    path: '/salarie_formation',
                    name: 'S.formation',
                    css: 'fa fa-fw fa-user',
                    key: 6
                  },
                  {
                    path: '/salarie_diplome',
                    name: 'S.diplome',
                    css: 'fa fa-fw fa-user',
                    key: 7
                  },
                  {
                    path: '/fonction',
                    name: 'S.fonction',
                    css: 'fa fa-fw fa-user',
                    key: 8
                  },
                  {
                    path: '/type_demande',
                    name: 'type demande',
                    css: 'fa fa-fw fa-user',
                    key: 9
                  },
                  {
                    path: '/indisponibilite',
                    name: 'Indispo',
                    css: 'fa fa-fw fa-user',
                    key: 10
                  },
                  {
                    path: '/demande',
                    name: 'Demande',
                    css: 'fa fa-fw fa-user',
                    key: 11
                  }
               
               
              ]
        }
        }else{
          this.state = {
            activePath: props.location.pathname,
          
            items: [
              {
                path: '/', /* path is used as id to check which NavItem is active basically */
                
                css: 'Logo',
                key: 0 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
              },  
              {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: ' Demandes',
                  css: 'fa fa-fw fa-home',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                  
                  {
                    path: '/salarie_formation',
                    name: ' Formations',
                    css: 'fa fa-fw fa-user',
                    key: 6
                  },
                  {
                    path: '/salarie_diplome',
                    name: ' Diplomes',
                    css: 'fa fa-fw fa-user',
                    key: 7
                  }
               
               
              ]
        }
        }

      
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
          
            <StyledSideNav className="sliderman">
                {
                    items.map((item) => {
                        return (
                            <NavItem  
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                    
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height:50px;
    width: 100px; /* width must be same size as NavBar to center */
    text-align: left; /* Aligns <a> inside of NavIcon div */
  
    margin-left: 10px;   /* Puts space between NavItems */
    :hover {
      opacity: 1;
      background-color: #6699cc;
      text-decoration: none; /* Gets rid of underlining of icons */
  }  
    a {
        font-size: 0.8em;
        color: ${(props) => props.active ? "yellow" : "#FFFF"};
        :hover {
            opacity: 1;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
      let a=0;
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
             
                <Link to={this.props.path}  onClick={this.handleClick}>
                    <NavIcon className={this.props.css}></NavIcon>{this.props.name} 
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends React.Component {
    render() {
        return (
          
            <RouterSideNav> </RouterSideNav>
        );
    }
}