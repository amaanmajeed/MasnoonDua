import Navbar from './Components/Navbar'
import Breadcrumbs from './Components/Breadcrumbs'
import Card from './Components/Card';

function App() {
  return (
    <>
      <main className='min-h-screen bg-neutral-100  dark:bg-slate-900'>
      <Navbar />
      <div className="mx-20">
        <Breadcrumbs/>
        <Card/>
        </div>
      </main>
    </>
  );
}

export default App;
