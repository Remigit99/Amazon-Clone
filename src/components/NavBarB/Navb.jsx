import './Navb.css';
import { AiOutlineMenu } from 'react-icons/ai';

const Navb = () => {
    return (
        <div id="nav2">

            <div className="container nav2__container">

                <div className="nav2__left">
                    <div className="nav2__left-1">
                        <AiOutlineMenu />
                        <h4>All</h4>
                    </div>

                    <div className="nav2__left-2">
                        <h4>Today's Deal</h4>
                        <h4>Customers Service</h4>
                        <h4>Registry</h4>
                        <h4>Gift Card</h4>
                        <h4>Sell</h4>

                    </div>


                </div>

                <div className="nav2__right">
                    <h4> Shop deals in Electronics </h4>
                </div>

            </div>

        </div>


    )
}

export default Navb