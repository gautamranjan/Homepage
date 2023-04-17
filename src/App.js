import './App.css';
import Header from './Header';


function App() {
  return (
      <div className="App">
        <Header/>
        <div className="body">
          <div className='body__up'></div>
            <h1>Hi User</h1>
              <h2>Account Number: 7041643691</h2>
              <h3>Current Balance: 396765</h3>
            </div>
    
            <div className="body__down">
                <button>Profile</button><br></br><button>e-Statement</button><br></br><button>Support</button><br></br>
                
                
                
            </div>
        </div>
    
  );
  
}

export default App;  