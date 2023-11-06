import React,{useState} from "react";
import Video from "../Components/Video_player/videoPlayer";
import MeetingSchedule from "../Components/Umeet/MeetingSchedule"
import './AlumniMeets.css';



import imgd1 from '../images/AlumniMeets/DelhiMeet/img1.jpg';
import imgd2 from '../images/AlumniMeets/DelhiMeet/img2.jpg';
import imgd3 from '../images/AlumniMeets/DelhiMeet/img3.jpg';
import imgd4 from '../images/AlumniMeets/DelhiMeet/img4.jpg';
import imgd5 from '../images/AlumniMeets/DelhiMeet/img5.jpg';
import imgd6 from '../images/AlumniMeets/DelhiMeet/img6.jpg';
import imgd7 from '../images/AlumniMeets/DelhiMeet/img7.jpg';
import imgd8 from '../images/AlumniMeets/DelhiMeet/img8.jpg';
import imgm1 from '../images/AlumniMeets/Mumbaimeet/imgm1.jpg';
import imgm2 from '../images/AlumniMeets/Mumbaimeet/imgm2.jpg';
import imgm3 from '../images/AlumniMeets/Mumbaimeet/imgm3.jpg';
import imgm4 from '../images/AlumniMeets/Mumbaimeet/imgm4.jpg';
import imgm5 from '../images/AlumniMeets/Mumbaimeet/imgm5.jpg';
import imgm6 from '../images/AlumniMeets/Mumbaimeet/imgm6.jpg';
import imgm7 from '../images/AlumniMeets/Mumbaimeet/imgm7.jpg';
import imgm8 from '../images/AlumniMeets/Mumbaimeet/imgm8.jpg';
import imgm9 from '../images/AlumniMeets/Mumbaimeet/imgm9.jpg';
import imgm10 from '../images/AlumniMeets/Mumbaimeet/imgm10.jpg';

const images = [

    
    imgm1,
    imgm2,
    imgm3,
    imgm4,
    imgm5,
    imgm6,
    imgm7,
    imgm8,
    imgd1,
    imgd2,
    imgd3,
    imgd4,
    imgd5,
    imgd6,
    imgd7,
    imgd8
];



const AlumniMeet = () => {

    const [isImageOpen, setIsImageOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openImage = (index) => {
        setSelectedImageIndex(index);
        setIsImageOpen(true);
    };

    const closeImage = () => {
        setIsImageOpen(false);
    };

    const navigateImage = (step) => {
        const newIndex = selectedImageIndex + step;
        if (newIndex >= 0 && newIndex < images.length) {
            setSelectedImageIndex(newIndex);
        }
    };
    return (
        <div className="meets-body">
            <Video />
            
            <div >
            <h1 className="Alumni_meets_headings">Alumni Meets</h1>
            <p className="Alumni_meets_para">SAIC's core principle is to bridge the gap between alumni and students at Thapar. In line with this principle, SAIC organizes alumni meets, inviting Thapar alumni to return to campus for a short visit. During these events, alumni have the opportunity to tour the campus, reconnect with faculty, and reminisce about their old memories.</p>
            </div>
            <h2 className="Alumni_meets_location">London Meet</h2>



            <div >
                


                <div className="gcontainer">
                    <div className="gallery">
                        {images.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Image ${index}`}
                                onClick={() => openImage(index)}
                            />
                        ))}
                    </div>
                </div>
                {isImageOpen && (
                    <div className="overlay">
                        <span className="close-btn" onClick={closeImage}>
                            &times;
                        </span>
                        <div className="image-popup">
                            <img
                                src={images[selectedImageIndex]}
                                alt={`Image ${selectedImageIndex}`}
                            />
                            <div className="nav-btns">
                                <button onClick={() => navigateImage(-1)} disabled={selectedImageIndex === 0}>
                                    &lt; Prev
                                </button>
                                <button onClick={() => navigateImage(1)} disabled={selectedImageIndex === images.length - 1}>
                                    Next &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>




            {/* <Slideshow/> */}



<h2 className="Alumni_meets_location">Delhi Meet </h2>
<div >
                


                <div className="gcontainer">
                    <div className="gallery">
                        {images.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Image ${index}`}
                                onClick={() => openImage(index)}
                            />
                        ))}
                    </div>
                </div>
                {isImageOpen && (
                    <div className="overlay">
                        <span className="close-btn" onClick={closeImage}>
                            &times;
                        </span>
                        <div className="image-popup">
                            <img
                                src={images[selectedImageIndex]}
                                alt={`Image ${selectedImageIndex}`}
                            />
                            <div className="nav-btns">
                                <button onClick={() => navigateImage(-1)} disabled={selectedImageIndex === 0}>
                                    &lt; Prev
                                </button>
                                <button onClick={() => navigateImage(1)} disabled={selectedImageIndex === images.length - 1}>
                                    Next &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>




            <h2 className="Alumni_meets_location">Banglore Meet</h2>
            <div >
                


                <div className="gcontainer">
                    <div className="gallery">
                        {images.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Image ${index}`}
                                onClick={() => openImage(index)}
                            />
                        ))}
                    </div>
                </div>
                {isImageOpen && (
                    <div className="overlay">
                        <span className="close-btn" onClick={closeImage}>
                            &times;
                        </span>
                        <div className="image-popup">
                            <img
                                src={images[selectedImageIndex]}
                                alt={`Image ${selectedImageIndex}`}
                            />
                            <div className="nav-btns">
                                <button onClick={() => navigateImage(-1)} disabled={selectedImageIndex === 0}>
                                    &lt; Prev
                                </button>
                                <button onClick={() => navigateImage(1)} disabled={selectedImageIndex === images.length - 1}>
                                    Next &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <h2 className="Alumni_meets_location">Mumbai Meet</h2>
            <div >
                


                <div className="gcontainer">
                    <div className="gallery">
                        {images.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Image ${index}`}
                                onClick={() => openImage(index)}
                            />
                        ))}
                    </div>
                </div>
                {isImageOpen && (
                    <div className="overlay">
                        <span className="close-btn" onClick={closeImage}>
                            &times;
                        </span>
                        <div className="image-popup">
                            <img
                                src={images[selectedImageIndex]}
                                alt={`Image ${selectedImageIndex}`}
                            />
                            <div className="nav-btns">
                                <button onClick={() => navigateImage(-1)} disabled={selectedImageIndex === 0}>
                                    &lt; Prev
                                </button>
                                <button onClick={() => navigateImage(1)} disabled={selectedImageIndex === images.length - 1}>
                                    Next &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>



            <h1 className="Alumni_meets_location">Upcoming Alumni Meets</h1>
            <MeetingSchedule />

        </div>
    );
}
export default AlumniMeet;