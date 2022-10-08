import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faLaptop, faStar, faRibbon, faUserGroup } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
    return ( 
        <div className="feature-container">
            <div className="feature">
                <div className="feature-icon">
                <FontAwesomeIcon icon={faUserGroup} />
                </div>
                <div className="feature-name">
                    One to one interaction
                </div>
            </div>
            <div className="feature">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="feature-name">
                    Explore our courses
                </div>
            </div>
            <div className="feature">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={faLaptop} />
                </div>
                <div className="feature-name">
                    Lifetime access on mobile and desktop
                </div>
            </div>
            <div className="feature">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={faRibbon} />
                </div>
                <div className="feature-name">
                    Become a certified Developer
                </div>
            </div>
        </div>
     );
}
 
export default Features;
