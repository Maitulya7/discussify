import React from 'react'

const FeedbackItem = () => {
  return (
    <div className='flex gap-4 flex-col my-8'>
      <div className="flex items-center gap-8 ">
        <div className="flex flex-col gap-2">
          <h1 className='font-semibold'>Improve JS</h1>
          <p className="text-gray-600 text-sm">If you want to be front end developer javascript is most important out of all of focus more on improving you javascript basic and then move to more robust framework like react and understand react components</p>
        </div>
        <div>
          <button className="shadow-sm shadow-gray-200 border px-4 py-1 rounded flex items-center gap-2 text-gray-600">
            <span className='triangle-vote-up'></span>
            80</button>
        </div>
      </div>
      <div className='border-t'></div>
    </div>
  )
}

export default FeedbackItem