import html2canvas from "html2canvas";

const saveCardAsImage = async (cardRef) => {
  if (!cardRef.current) return;

  try {
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null, // transparent background
      useCORS: true, // allow cross-origin images
      scale: 2, // better quality
    });

    const link = document.createElement("a");
    link.download = "card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error("Export failed:", error);
  }
};

export default saveCardAsImage;