import BookmarkImage from '../Images/illustration-bookmark.svg'
const Bookmark:React.FC=()=>{
    return(
        <main className='flex flex-col lg:flex-row lg:flex lg:justify-between items-center'>
        <section className="relative h-52 mt-24">
        <figure className="bg-Blue w-width h-44 rounded-r-full relative right-24 lg:h-80 lg:w-wdd"> </figure>
          <img src={BookmarkImage} alt='boomark'className="relative w-96 h-56 z-10 bottom-64 lg:bottom-96 lg:left-14 lg:w-wdd lg:h-80" />
      </section>
      <section className='text-center lg:w-wdd lg:text-start'>
        <h1 className='text-3xl text-heading font-bold'>Bookmark in one click</h1>
        <p className='w-80 lg:w-96 lg:leading-8 text-text lg:text-base mt-4 leading-7 text-sm'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
      </section>
      </main>
      )
}

export default Bookmark