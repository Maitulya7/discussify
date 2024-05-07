import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import FeedbackItem from '@/components/FeedbackItem';

export default function Home() {
  return (
    <>
      <main className="bg-white md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-8">
          <h1 className="font-bold text-xl">
            Coding with Maitulya
          </h1>
          <p className="opacity-90 text-slate-700">
            how to improve my react skills and my front end design skills
          </p>
        </div>
        <div className="px-8 py-4 bg-gray-100 flex border-b">
          <div className="grow"></div>
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Make A Suggestion
          </button>
        </div>
        <div className="px-8">
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
        </div>
      </main>
    </>
  )
}
