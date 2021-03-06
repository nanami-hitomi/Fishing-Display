import React from 'react'

class FishingDisplayJSLessCheckless extends React.Component {
    state = {
        breadcrumbFish: false,
        fishies: {
            MACKEREL_MACHINE: false,
            COELACANTH_MACHINE: false,
            BREAM_MACHINE: false,
            STARFISH_MACHINE: false,
            SWORDFISH_MACHINE: false,
            BLOWFISH_MACHINE: false,
            BLOAT_FISH_MACHINE: false,
            CARP_MACHINE: false,

            ARAPAIMA_MACHINE: false,
            KOI_CARP_MACHINE: false,
            KILLIFISH_MACHINE: false,
            BASKING_SHARK: false,
            BREAM: false,
            STARFISH: false,
            BEETLE_FISH: false,
            HORSESHOE_CRAB: false,

            MACKEREL: false,
            SWORDFISH: false,
            BLOWFISH: false,
            COELACANTH: false,
            TWOFACE: false,
            WATER_FLEA: false,
            OIL_SARDINE: false,
            ARAPAIMA: false,

            FRESHWATER_RAY: false,
            FUR_CARP: false,
            KOI_CARP: false,
            BLOAT_FISH: false,
            CARP: false,
            KILLIFISH: false,
            TWINFISH: false,
            AROWANA: false,

            IRON_PIPE: false,
            POD_B: false,
            BROKEN_FIREARM: false,

            BATTERY: false,
            GAS_CYLINDER: false,
            TIRE: false,
            MACHINE_LIFEFORM_HEAD: false,
            FRESHWATER_RAY_MACHINE: false,
            BASKING_SHARK_MACHINE: false,
            AROWANA_MACHINE: false,
            HORSESHOE_CRAB_MACHINE: false,
        }
    }


    render = () => {
        var fish = Object.entries(this.state.fishies)

        //size constants- move to props?
        const fishBoxHeight = 280
        const fishBoxWidth = 700
        const fishSize = 50
        const fishPadding = 2

        const redcolor = '#ff4646'//'#ff8e22'
        const bluecolor = '#0074d2'//'#903bff'
        const tilt = "147.75deg"


        return (<div>

            <div className="fishBox" id="fishBox">
                {
                    fish.map(([fishName, fished]) => (
                        <div className="fish"key={fishName} >
                            <div className="inside" id={`red${fishName}`}></div>
                            <div className="inside" id={`blue${fishName}`}></div>
                            <img className="fishImg" src={`./images/${fishName}.png`} />
                        </div>
                    ))
                }
            </div>
            <style jsx>
                {`
                .fishBox{
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;

                    border: 6px solid transparent;
                    padding: 10px;

                    width:${fishBoxWidth}px;
                    height:${fishBoxHeight}px;

                    user-select:none;
                }

                .fish{
                    height:${fishSize}px;
                    width:${fishSize}px;
                    padding: ${fishPadding}px
                }
                .fishImg{
                    max-width:100%;
                    max-height:100%;
                    position:relative;
                    z-index:3;
                }

                .inside{
                    position:absolute;
                    height:${fishSize}px;
                    width:${fishSize}px;
                }

                .red, .blue{
                    border-radius:100%;
                    overflow:hidden;
                    clip-path: polygon(50% 0%, 93.03% 23.14%, 93.88% 75%, 50% 100%, 7.41% 78.7%, 7.41% 25%);
                    mask: radial-gradient(white 67%, transparent 69%);
                }
                    
                .red{
                    background: linear-gradient(${tilt}, ${redcolor} 50%, transparent 50%);
                    animation: redFadeIn .15s ease both;
                }
                .blue{
                    background: linear-gradient(${tilt}, transparent 50%, ${bluecolor} 50%);
                    animation: blueFadeIn .15s ease both;
                }

                @keyframes redFadeIn{
                    0%{
                        background: linear-gradient(${tilt}, ${redcolor} 0%, transparent 50%);
                    }
                    25%{
                        background: linear-gradient(${tilt}, ${redcolor} 12%, transparent 50%);
                    }
                    50%{
                        background: linear-gradient(${tilt}, ${redcolor} 23%, transparent 50%);
                    }
                    75%{
                        background: linear-gradient(${tilt}, ${redcolor} 35%, transparent 50%);
                    }
                    100%{
                        background: linear-gradient(${tilt}, ${redcolor} 50%, transparent 50%);
                    }
                }

                @keyframes blueFadeIn{
                    0%{
                        background: linear-gradient(${tilt}, transparent 50%, ${bluecolor} 100%);
                    }
                    25%{
                        background: linear-gradient(${tilt}, transparent 50%, ${bluecolor} 88%);
                    }
                    50%{
                        background: linear-gradient(${tilt}, transparent 50%, ${bluecolor} 77%);
                    }
                    75%{
                        background: linear-gradient(${tilt}, transparent 50%, ${bluecolor} 65%);
                    }
                    100%{
                        background: linear-gradient(${tilt}, transparent 50%, ${bluecolor} 50%);
                    }
                }
                }

            `}
            </style>
        </div >)
    }

}

export default FishingDisplayJSLessCheckless