import React from 'react'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Card from './components/Card'
import jobsData from './data.json'

function App() {


  const jobs = jobsData.map((job) => 
    <Card 
      key={job.id}
      prop={job}
    />
  )
  

  return (
    <div className="App">
      <Header />
      <main>
        <Searchbar />
        <section class="container">
          <div id="grid" class="grid">
            {jobs}
          </div>
      </section>
      </main>
    </div>
  );
}

export default App;
