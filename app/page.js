
export default function Home() {
  return (
    <>
      <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-8">
          <h1 className="font-bold text-xl">
            Coding with Maitulya
          </h1>
          <p className="opacity-90 text-slate-700">
            how to improve my react skills and my front end design skills
          </p>
        </div>
        <div className="px-8 py-2 bg-gray-100 flex border-b">
          <div className="grow"></div>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Make A Suggestion
          </button>
        </div>
        <div className="px-8 py-4">
          <div>
            <h1>Improve JS</h1>
            <p className="text-gray-600 text-sm">If you want to be front end developer javascript is most important out of all of focus more on improving you javascript basic and then move to more robust framework like react and understand react components</p>
          </div>
        </div>
      </main>
    </>
  )
}
