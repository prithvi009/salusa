import React from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ActionButton from '../../shared/ActionButton';


const Navbar = ({isTopOfPage}) => {

  const [isMenuToggled, setIsMenuToggled] = React.useState(false);
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarbackground = isTopOfPage ? "" : "bg-blue-200 drop-shadow";

  return (

    <nav>
        <div className={`${navbarbackground} ${flexBetween} fixed top-0 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <h3>MediLodge</h3>
                {isAboveMediumScreens ? (
                    <ul className={`${flexBetween} space-x-14 text-lg`}>
                        <li>About</li>
                        <li>Contact</li>
                        <li>
                            <ActionButton />
                        </li>
                    </ul>
                ) : (
                    <button 
                            className="rounded-full bg-blue-500 p-2"
                            onClick={()=>{setIsMenuToggled(!isMenuToggled)}}
                        >
                            <Bars3Icon className="w-6 h-6 text-white"/>

                        </button>

                )}



            </div>


        </div>
    </nav>
    

    
  )
}

export default Navbar