const NameHeading = ({ fullText, className = "" }) => {
    const prefixLength = "hi, ".length;
    const prefix = fullText.substring(0, prefixLength);
    const namePart = fullText.substring(prefixLength);

    return (
        <div className={`flex items-center ${className} h-[1.2em]`}>
            <span className="text-[#F2F5F7]">{prefix}</span>
            <span className="text-[#57F2D6]">{namePart}</span>
            <span className="bg-[#57F2D6] w-1 md:w-1.5 h-full opacity-100 blinking-cursor" style={{ marginLeft: '4px' }}></span>
        </div>
    );
};

export default NameHeading;
