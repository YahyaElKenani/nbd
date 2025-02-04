import { Button } from "react-bootstrap";
import BirthdayCake from "./BirthdayCake";
import { useEffect, useState, useRef } from "react"; // Add useRef
import '../Styling/cake.css'
export default function Homepage() {
    const [showBtn, setShowBtn] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const audioRef = useRef(null); // Add ref for audio element

    const audioPath = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/0204.MP3` : '/0204.MP3';
    useEffect(() => {
        setTimeout(() => {
            setShowBtn(true)
        }, 15000);
    }, []);

    const handleShowMessage = () => {
        setShowMessage(true);
        // Play audio when message shows
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center flex-column position-relative">
                <span className="text-light text-center display-3 homepage-title droid-arabic-kufi fw-bold"> 🥳 نورتي يا قطتي  كل سنة وانتي طيبة</span>
                <BirthdayCake />
                <Button 
                    variant="success" 
                    className={`${showBtn ? 'd-block' : 'd-none'} fw-bold droid-arabic-kufi show-secret-msg`}
                    size="lg"
                    onClick={handleShowMessage}
                >
                    اضغطي هنا
                </Button>

                {/* Audio element */}
                <audio ref={audioRef} preload="auto">
                    <source src={audioPath} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                {/* Full screen message overlay */}
                <div className={`message-overlay ${showMessage ? 'show' : ''}`}>
                    <div className="message-content">
                    <p className="message-line">كل سنة وانتي طيبة يا نونو وعقبال  100 سنة إن شاء الله ورغم إن كان نفسي احتفل بيه معاكي بس دا كل اللي قدرت اعملهولك ودا جزء من هديتك</p>
                        <p className="message-line">لو قعدت من هنا لبكرا اتكلم عنك وعن معزتك عندي مش هيكفي حقك نهائى</p>
                        <p className="message-line"> بس انتي اغلي واجمل حد في حياتي كلها وبتمنى دايما اننا نفضل مع بعض وبإذن الله كل عيد ميلاد ليكي من دلوقتي هنبقى مع بعض فيه وربنا وحده يعلم انتي بالنسبالي ايه ولا انا شايفك ازاي
                            
                        </p>
                        <p className="message-line">انتي مش بالنسبالي القمر بس انتي القمر والنجوم والشمس وانا مش بس مش شايف غيرك وسط البنات انا مش شايف غيرك وسط الناس كلها واكتر حد اتمنى ربنا يديمه ف حياتي مع اهلي طبعا</p>
                        <p className="message-line"> بإذن الله كل سنة مع بعض ينور عنيا</p>
                        <p className="message-line">متنسيش تتمني امنيتك بقي</p>
                        <p className="message-line"><hr></hr></p>
                        <p className="message-line">سأظل أحبك حتى تحترق النجوم وتفني العوالم.
                                                    وحتى تتصادم الكواكب وتذبل الشموس.
                                                    حتى ينطفئ القمر وتجف البحار والأنهار.
                                                    وحتى اشيخ فتتآكل ذكرياتي
                                                    حتى يعجز لساني عن ذكر اسمك
                                                    وحتى ينبض قلبي للمرة الأخيرة.
                                                    فقط عند ذلك ربما اتوقف.. ربما!</p>
                    </div>
                </div>
            </div>
        </>
    )
}