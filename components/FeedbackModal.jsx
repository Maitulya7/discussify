import React from 'react'

const FeedbackModal = ({setOpen}) => {
    
    const handleClosePopup = (e) => {
        if (e.target.id === "popup-overlay") {
            setOpen(false);
        }
      };

  return (
    <>
         <div
          id="popup-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white w-[600px] h-[600px] p-6 relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2 className="text-xl font-bold mb-4">Suggestion Box</h2>
            <p>Placeholder content for the popup. Add your form or information here.</p>
          </div>
        </div>
    </>
  )
}

export default FeedbackModal