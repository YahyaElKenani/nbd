import { Button } from "react-bootstrap"
import "../Styling/welcome.css"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router";
export default function WelcomePage() { 
    const [pinOne, setPinOne] = useState('');
    const [pinTwo, setPinTwo] = useState('');
    const [pinThree, setPinThree] = useState('');
    const [pinFour, setPinFour] = useState('');
    const [loginDisabled, setLoginDisabled] = useState(true);
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refFour = useRef(null);
    const navigate = useNavigate();
    const foucsOne = () => { 
        refOne.current.focus();
    }
    useEffect(() => {
        foucsOne(); 
    }, [])
    useEffect(() => {
        if (pinOne === '0' && pinTwo === '7' && pinThree === '1' && pinFour === '1' ) { 
            setLoginDisabled(false);
        } else { 
            setLoginDisabled(true);
        }
    }, [pinOne, pinTwo, pinThree, pinFour])
    const updateFirstPin = (e) => { 
        setPinOne(e);
        if (e.length === 1) { 
            refTwo.current.focus();
        }
    }
    const updateSecondPin = (e) => { 
        setPinTwo(e);
        if (e.length === 1) { 
            refThree.current.focus();
        }
    }
    const updateThirdPin = (e) => { 
        setPinThree(e);
        if (e.length === 1) { 
            refFour.current.focus();
        }
    }
    const updateFourthPin = (e) => { 
        setPinFour(e);
        if (e.length === 1) {
            refFour.current.blur()
        }
    }
    return (
        <>
            <div className="container pin-container d-flex flex-column justify-content-center align-items-center">
                    <span className="display-1 text-center fw-bold my-5 droid-arabic-kufi title">ادخل الرقم السري</span>
                <form className="d-flex justify-content-evenly align-items-center gap-5 row">
                    <input type="number" className="pin-input col-2" onChange={(e) => updateFirstPin(e.target.value)} ref={refOne}/>
                    <input type="number" className="pin-input col-2" onChange={(e) => updateSecondPin(e.target.value)} ref={refTwo}/>
                    <input type="number" className="pin-input col-2" onChange={(e) => updateThirdPin(e.target.value)} ref={refThree}/>
                    <input type="number" className="pin-input col-2" onChange={(e) => updateFourthPin(e.target.value)} ref={refFour}/>
                    <Button variant="primary" size="lg" className="droid-arabic-kufi fw-bold fs-3 w-50" disabled={loginDisabled}
                    onClick={() => navigate('/homepage')}>دخول</Button>
                </form>
            </div>
        </>
    )
}