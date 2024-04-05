import React, { useState } from 'react';
import img1 from "./images/img1.jpg"
import img3 from "./images/img3.jpg"
import img2 from "./images/img2.jpg"
import logo1 from "./logos/logo1.svg"
import logo2 from "./logos/logo2.svg"
import logo3 from "./logos/log3.svg"
import logo4 from "./logos/logo4.svg"

let count = 0;
let logoCount = 0;
const ImageArr = [img1, img2, img3];
const LogoArr = [logo1, logo2, logo3, logo4];

function Images({ data, setData }) {
    const [image, setImage] = useState(img1);

    const [logo, setLogo] = useState(logo1);
    // const [tag, setTag] = useState(<h1>Heading</h1>);

    function ChangeImage() {
        count++;
        if (count <= 2) {
            setImage(ImageArr[count])
        } else {
            count = 0;
        }
    }
    function ChangeLogo() {
        logoCount++;
        if (logoCount <= 3) {
            setLogo(LogoArr[logoCount])
        } else {
            logoCount = 0;
        }
    }

    return (
        <div>

            <div style={style.flex}>
                <div style={style.inner}>
                    <h1>Image{count}</h1>
                    <img src={image} alt="Image1" style={style.img} />
                </div>
                <div style={style.inner}>
                    <h1>Logoes{logoCount}</h1>
                    <img src={logo} alt="Logo1" style={style.img} />
                </div>
                <div >
                    <h4>fname: {data.fname}</h4>
                    <p>{JSON.stringify(data)}</p>
                </div>


            </div>
            <div style={style.flex}>
                <button
                    onClick={ChangeImage}
                    style={style.inner}
                >
                    Change Images
                </button>
                <button
                    onClick={ChangeLogo}
                    style={style.inner}
                >
                    Change Logoes
                </button>
                <button
                    onClick={() => {
                        setData((prev) => {
                            return {
                                ...prev,
                                fname: "Amey"
                            }
                        })
                    }}
                    style={style.inner}
                >
                    Change Name
                </button>
            </div>
        </div>
    )
}

export default Images;

const style = {
    img: { height: "200px", borderRadius: '20px' },
    flex: { display: "flex", alignItems: "center" },
    inner: { margin: "10px", padding: "10px", border: "solid black 2px" }

}