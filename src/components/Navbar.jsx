import "./css/navbar.css"
import { useNavigate } from 'react-router';

const links = [
  {
    title: "Home",
    link: "/home",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },
  //   add the other link as well
];

export const Navbar = () => {

  const navigate = useNavigate()
  return (
      <div className="navbar-css">
        {links.map((item) => {
          return <Navbarhead 
                       title={item.title}
                       link={item.link}
                       id={item.id}
                       navigate={navigate}
                      />
        })}
      </div>
    )
};

function Navbarhead({title, link, id, navigate}){

  const handleNavigate = (id) => {
    if (id == "header-link-home"){
      navigate(link)
    }else if (id == "header-link-about"){
      navigate(link)
    } else {
      navigate(link)
    }
  }

  return (
    <button onClick={handleNavigate}>{title}</button>
  )
}
