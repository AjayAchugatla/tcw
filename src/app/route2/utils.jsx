// imports
import SDThumbnail from "../../../public/assets/SDThumbnail.png";
import DIEThumbnail from "../../../public/assets/DIEThumbnail.png";

// consts
const TFI_GENRES = {
  SD: "SarcasticDescriptions",
  DIE: "DialogueInEnglish",
};
const TFI_GENRES_VISIBLE_NAMES = {
  SD: "Sarcastic Descriptions",
  DIE: "Dialogue in English",
};

// functions

// states

// handlers

const handleClick = (label) => {
  // handle button click -> switch case
  switch (label) {
    case TFI_GENRES.SD:
      alert("Sarcastic Descriptions button clicked");
      break;
    case TFI_GENRES.DIE:
      alert("Dialogue in English button clicked");
      break;
    default:
      alert(`${label} button clicked`);
      break;
  }
};

// styles
const rootDivStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "90vh",
};

const gridDivStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)", // 5 columns
  gridTemplateRows: "repeat(4, auto)", // 4 rows
  gap: 20,
  width: "90%",
};

const buttonDivStyle = {
  display: "flex", // arrange children horizontally
  alignItems: "center", // vertically center content
  justifyContent: "space-between",
  gap: "6px", // space between button and div
  borderRadius: "50px", // rounded corners
  padding: "5px", // padding inside container
  width: "100%", // full width of grid cell
  boxSizing: "border-box", // include padding in width
  backgroundColor: "rgba(248, 248, 255, 0.3)", // optional light background
  height: "4.5vh", // fixed height
};

const buttonStyle = {
  padding: "15px 20px",
  borderRadius: "60px 0 0 60px",
  backgroundColor: "transparent",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.2s",
  textAlign: "center",
  fontWeight: "bold",
  width: "75%",
  color: "white",
  fontSize: "1.25rem",
};

const divMemePicDivStyle = {
  width: "25%",
  height: "60px",
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

// export
export {
  DIEThumbnail,
  TFI_GENRES,
  TFI_GENRES_VISIBLE_NAMES,
  buttonStyle,
  divMemePicDivStyle,
  buttonDivStyle,
  handleClick,
  SDThumbnail,
  rootDivStyle,
  gridDivStyle,
};
