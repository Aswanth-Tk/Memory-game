import React, { useEffect, useMemo, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom"

const Gamepage = () => {
    const [moves, setmoves] = useState([])
    const [data, setdata] = useState([]);
    const [cardflip, setcardflip] = useState([]);
    const [digit, setdigit] = useState([]);
    const [abc, setabc] = useState([]);
    const refreshpage=()=>{
        window.location.reload()
    }
    const images = useMemo(() => [
        { image: "https://th.bing.com/th/id/OIP.nKkm0wnm9J-Ko2rny3mAzAHaIo?rs=1&pid=ImgDetMain" },
        { image: "https://th.bing.com/th/id/OIP.Eh0i7za2JmqhBB60AHt5TwHaGN?rs=1&pid=ImgDetMain" },
        { image: "https://img.freepik.com/premium-vector/isolated-dark-grape-with-green-leaf_317810-1956.jpg?w=2000" },
        { image: "https://www.onebuzz.in/image/cache/data/Amitbajaj/FreshFruits/Safedamango-900x900.png" },
        { image: "https://www.healthbenefitstimes.com/9/gallery/pineapple-1/Pineapple-fruit.jpg" },
        { image: "https://th.bing.com/th/id/OIP.HC991E8MaPlWflZmT5fTwQHaGu?rs=1&pid=ImgDetMain" }
    ], []);
    useEffect(() => {
        const shuffledImages = [...images, ...images].sort(() => Math.random() - 0.5);
        setdata(shuffledImages);
    },[images]);
    const handleCardClick = (index) => {
        setmoves([...moves, index])
        setabc([index])
        setdigit(data[index])
        if (data[index] === digit) {
            setcardflip([...cardflip, ...abc, index])
        }
    };

    return (
        <div className='gamepage'>
            {data.map((item, index) => (
                <div className='cards'>
                    <div
                        key={index}
                        style={{
                            transform: (cardflip).includes(index) || (abc).includes(index) ? "rotateY(180deg)" : "rotateY(0deg)",
                        }}
                        className="fruitimages">
                        <div className="front" onClick={() => handleCardClick(index)} ></div>
                        <div className="back" >
                            <img src={item.image} alt='' height="100px" width="100px" />
                        </div>
                    </div>
                </div>
            ))}
            <Modal show={cardflip.length === 12 ? "true" : ""}
                className='modalclass'
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='modalbody'>
                    <h2 className='modalhead'> Congratulations! You won.</h2>
                    <p className='moves'> <b>Total Moves = {moves.length}</b></p>
                    <div className='text-center'>
                        <Link to={"/"}>
                            <button className='modalbutton' >Go to Home</button>
                        </Link>
                    </div>
                    <button className='modalbutton' onClick={refreshpage}>Restart</button>
                </Modal.Body>
            </Modal>
            </div>
    );
};
export default Gamepage;
