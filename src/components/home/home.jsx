import React from "react"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <div>
                    <p>task one part 1</p>
                    <Link to="/multipleoptions" style={{ textDecoration: "none" }}>
                        <Button variant="outlined" color="primary">
                            task one part 1
                        </Button>
                    </Link>
                </div>
                <div>
                    <p>task one part 2</p>
                    <Link to="/phone" style={{ textDecoration: "none" }}>
                        <Button variant="outlined" color="primary">
                            task one part 2
                        </Button>
                    </Link>
                </div>
                <div>
                    <p>task two</p>
                    <Link to="/5cdb6454107a752e479349A" style={{ textDecoration: "none" }}>
                        <Button variant="outlined" color="primary">
                            task two
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}



export default Home;
