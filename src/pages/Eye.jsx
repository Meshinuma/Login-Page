import close from "../assets/close.png";
import open from "../assets/open.png";

function Eye({ isOpen }) {
  return (
    <img
      src={isOpen ? close : open}
      alt="Toggle password visibility"
      width={20}
      height={20}
    />
  );
}

export default Eye;
