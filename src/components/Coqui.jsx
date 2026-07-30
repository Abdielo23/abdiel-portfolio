const COLORS = {
    bodyBrown:    "#8E5F3D",
    bellyCream:   "#E2D0C4",
    outlineBlack: "#000000",
    eyeOrange:    "#EE8F00",
    hatStraw:     "#C3A465",
    hatDetail:    "#4F3C2C",
};

const JUMP_HEIGHT = 5;

const Coqui = ({ size = 60 }) => {
    const { bodyBrown, bellyCream, outlineBlack, eyeOrange, hatStraw, hatDetail } = COLORS;

    return (
        <div className="flex justify-center items-center opacity-90 hover:opacity-100 transition-opacity duration-700">
            <svg width={size} height={size} viewBox="0 0 100 100" className="overflow-visible">
                <defs>
                    <style>
                        {`
                        @keyframes coqui-waddle {
                            0% { transform: translateY(0px) rotate(0deg); }
                            25% { transform: translateY(-${JUMP_HEIGHT}px) rotate(2deg); }
                            50% { transform: translateY(0px) rotate(0deg); }
                            75% { transform: translateY(-${JUMP_HEIGHT}px) rotate(-2deg); }
                            100% { transform: translateY(0px) rotate(0deg); }
                        }
                        @keyframes eye-blink {
                            0%, 40%, 45%, 100% { transform: scaleY(1); }
                            42.5% { transform: scaleY(0.1); }
                        }

                        .coqui-animate { animation: coqui-waddle 6s ease-in-out infinite; transform-origin: center bottom; }
                        .coqui-eye-blink { animation: eye-blink 8s infinite step-end; transform-origin: center center; }
                        `}
                    </style>
                </defs>

                <g className="coqui-animate" transform="translate(0, 5)">
                    {/* Main Body */}
                    <path
                        d="M20 70 Q10 75 10 65 L15 50 C25 30 50 15 80 20 L90 35 C95 45 90 60 75 70 Q60 80 50 85 Q40 80 20 70Z"
                        fill={bodyBrown} stroke={outlineBlack} strokeWidth="2"
                    />

                    {/* Belly - Lighter area */}
                    <path
                        d="M25 68 C30 75 40 78 50 78 C60 78 70 75 75 68 Q70 60 50 55 Q30 60 25 68Z"
                        fill={bellyCream} stroke={outlineBlack} strokeWidth="2"
                    />

                    {/* Left Front Leg */}
                    <path d="M25 55 Q18 45 20 35 Q25 40 28 50 Z" fill={bodyBrown} stroke={outlineBlack} strokeWidth="2" />
                    <path d="M20 35 L20 30 Q25 25 30 30 L30 35 Z" fill={bellyCream} stroke={outlineBlack} strokeWidth="2" /> {/* Hand */}

                    {/* Right Front Leg (partially hidden) */}
                    <path d="M75 50 Q82 45 80 35 Q75 40 72 50 Z" fill={bodyBrown} stroke={outlineBlack} strokeWidth="2" />
                    <path d="M80 35 L80 30 Q75 25 70 30 L70 35 Z" fill={bellyCream} stroke={outlineBlack} strokeWidth="2" /> {/* Hand */}

                    {/* Left Back Leg */}
                    <path d="M15 75 Q10 80 15 85 L25 80 Q20 75 15 75Z" fill={bodyBrown} stroke={outlineBlack} strokeWidth="2" />
                    <path d="M15 85 L20 90 Q25 85 20 80 L15 85 Z" fill={bellyCream} stroke={outlineBlack} strokeWidth="2" /> {/* Foot */}

                    {/* Right Back Leg */}
                    <path d="M85 75 Q90 80 85 85 L75 80 Q80 75 85 75Z" fill={bodyBrown} stroke={outlineBlack} strokeWidth="2" />
                    <path d="M85 85 L80 90 Q75 85 80 80 L85 85 Z" fill={bellyCream} stroke={outlineBlack} strokeWidth="2" /> {/* Foot */}

                    {/* Head - more rounded */}
                    <path
                        d="M25 20 Q50 5 75 20 C70 30 50 35 25 20Z"
                        fill={bodyBrown} stroke={outlineBlack} strokeWidth="2"
                    />

                    {/* Eyes */}
                    <g className="coqui-eye-blink">
                        <circle cx="35" cy="20" r="8" fill={eyeOrange} stroke={outlineBlack} strokeWidth="2" />
                        <circle cx="65" cy="20" r="8" fill={eyeOrange} stroke={outlineBlack} strokeWidth="2" />
                        <circle cx="35" cy="20" r="3" fill={outlineBlack} /> {/* Pupils */}
                        <circle cx="65" cy="20" r="3" fill={outlineBlack} />
                        <circle cx="37" cy="18" r="1.5" fill="white" /> {/* Glimmer */}
                        <circle cx="67" cy="18" r="1.5" fill="white" />
                    </g>

                    {/* Straw Hat */}
                    <g transform="rotate(5 50 20)"> {/* Slight rotation for style */}
                        {/* Hat base */}
                        <path d="M30 15 C35 0 65 0 70 15 L60 25 C55 18 45 18 40 25 Z" fill={hatStraw} stroke={outlineBlack} strokeWidth="2" />
                        {/* Hat brim */}
                        <path d="M25 25 C30 18 70 18 75 25 L70 30 C65 25 35 25 30 30 Z" fill={hatStraw} stroke={outlineBlack} strokeWidth="2" />

                        {/* Hat weave details */}
                        <line x1="35" y1="20" x2="65" y2="20" stroke={hatDetail} strokeWidth="1" opacity="0.7"/>
                        <line x1="40" y1="22" x2="60" y2="22" stroke={hatDetail} strokeWidth="1" opacity="0.7"/>
                        <line x1="45" y1="24" x2="55" y2="24" stroke={hatDetail} strokeWidth="1" opacity="0.7"/>
                        {/* Vertical weaves */}
                        <line x1="45" y1="18" x2="45" y2="28" stroke={hatDetail} strokeWidth="1" opacity="0.7"/>
                        <line x1="50" y1="15" x2="50" y2="30" stroke={hatDetail} strokeWidth="1" opacity="0.7"/>
                        <line x1="55" y1="18" x2="55" y2="28" stroke={hatDetail} strokeWidth="1" opacity="0.7"/>

                        {/* Hat top details / "hair" */}
                        <path d="M35 15 Q30 5 40 10" stroke={outlineBlack} strokeWidth="1" fill="none"/>
                        <path d="M45 15 Q40 5 50 10" stroke={outlineBlack} strokeWidth="1" fill="none"/>
                        <path d="M55 15 Q50 5 60 10" stroke={outlineBlack} strokeWidth="1" fill="none"/>
                        <path d="M65 15 Q60 5 70 10" stroke={outlineBlack} strokeWidth="1" fill="none"/>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Coqui;
