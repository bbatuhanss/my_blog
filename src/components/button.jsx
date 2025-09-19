import CV from "../articles/cv/Hasan_Batuhan_Sevinç_CV.pdf";

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
    <button className="button" onClick={onButtonClick}>
      Download CV
    </button>
  );
};

export default button;
