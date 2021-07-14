import React, { useContext } from 'react'
import {
    Link,
    NavLink,
} from "react-router-dom";
import { motion } from 'framer-motion'
import { Howl } from "howler";
import swordDraw from "../audioclips/swordDraw.mp3";
import swordSFX from "../audioclips/SwordPullOut.mp3"
import { NameAvatarContext, SoundContext } from "../App";

export default function InputPage(props) {
    const nameAvatarValue = useContext(NameAvatarContext)
    const soundToggleMute = useContext(SoundContext)

    const sound1 = new Howl({
        src: [swordSFX],
        autoplay: false,
        volume: 0.2,
    })
    const sound2 = new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,
    })

    function playerSet() {
        soundToggleMute.sound && sound1.play()
    }

    return (
        <motion.div
            initial={{scaleY: 0}}
            animate={{scaleY: 1}}
            exit={{scaleY: 0}}
        >
            <div className="">
                <div className="InputPagePlayerInput">
                    <label className="generalTextStyling">Enter Your Playername</label>
                    <input className="mainInputStyling"
                           value={nameAvatarValue.name}
                           onChange={(event) => nameAvatarValue.setName(event.target.value)}/>
                </div>

                <div className="InputPageSelectInput">
                    <label id="selectYourAvatarLabel" className="generalTextStyling">Select Your Avatar</label>
                        <select className="mainInputStyling" name="avaterMenu" value={nameAvatarValue.avatar}
                                onChange={(event) => nameAvatarValue.setAvatar(event.target.value)}>
                            <option id={"emoji2"}>😂</option>
                            <option id={"emoji3"}>😎</option>
                            <option id={"emoji4"}>✌</option>
                            <option id={"emoji5"}>❤</option>
                            <option id={"emoji6"}>🙄</option>
                            <option id={"emoji7"}>😜</option>
                            <option id={"emoji8"}>🎱</option>
                            <option id={"emoji9"}>🍔</option>
                            <option id={"emoji10"}>🍤</option>
                            <option id={"emoji-Empty"}></option>
                        </select>
                </div>

                <div className="InputPageNavButtons">
                    <Link to="/">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                soundToggleMute.sound && sound2.play()
                            }}>Back
                            </button>
                        </motion.div>
                    </Link>

                    <NavLink to="/Quiz">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={
                                playerSet
                            }>Playerset
                            </button>
                        </motion.div>
                    </NavLink>
                </div>
            </div>
        </motion.div>
    )
}

