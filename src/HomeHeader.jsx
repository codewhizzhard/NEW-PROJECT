const HomeHeader = ({handleState, mount}) => {


  return (
    <header className="bg-slate-400 h-[12vh] flex justify-between shadow-black relative pt-2 pl-1000">
      <h1 className="font-bold text-2xl p-3">LOGIN RHEACT</h1>
      <div>
        <button >{mount ? <div className="absolute bottom-0 hover:bottom-1 bg-red-700 right-2 p-1 rounded-full border-white border" onClick={handleState}>toggle</div> : null}</button>
      </div>
    </header>
    )
    };
export default HomeHeader