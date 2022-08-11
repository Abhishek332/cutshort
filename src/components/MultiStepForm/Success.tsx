import { Button } from "../FormElements/FormElements";

const Success = () => {
    return (
        <div className="success">
            <img src="success.png" alt="" />
            <header>
                <h2>Congratulations Eren!</h2>
                <p>You have completed onboarding, you can start using Eren!</p>
            </header>
            <Button text="Launch Eden" action={() => { }} />
        </div>
    )
}

export default Success