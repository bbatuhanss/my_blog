import CV from "../articles/cv/cv.pdf";
const button = () => {
  const onButtonClick = () => {
    const pdfUrl = CV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HasanBatuhanSevincCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <button className="button" onClick={onButtonClick}>
        Download CV
      </button>
    </div>
  );
};

export default button;
("");
