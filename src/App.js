import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [email, setEmail] = useState(''); //input for email
  const [password, setPassword] = useState(''); //input for password
  const [item, setItem] = useState([]); //array of item that is storing everything

  // Handle Submit function, when button is pressed, information is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...item, { email: email, password: password }]);
    setEmail('');
    setPassword('');
  }

  // Gets first items from localstorage and sets it to the 'item' in the array
  // when the page first loads
  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      setItem(JSON.parse(data));
    }

  }, [])

  //Sets items to localstorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(item));
  })

  return (
    <div className="App">
      <section id="cover" class="min-vh-100">
        <div id="cover-caption">
          <div class="container">
            <div class="row text-white">
              <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <img src="https://static.wixstatic.com/media/17765e_7c6784e02f43457aaaec07d168491650~mv2.png/v1/fill/w_42,h_40,al_c,q_85,usm_0.66_1.00_0.01/Muted%20Watts.webp" alt="weekly logo"/>
                <div class="px-2">
                  <form onSubmit={handleSubmit} class="justify-content-center">
                    
                    <div class="form-group">
                      <label>Email</label>
                      <input class="form-control" placeholder="Enter email" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    
                    <div class="form-group">
                      <label>Password</label>
                      <input class="form-control" placeholder="Enter password" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {/* <input type="submit" /> */}
                    <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
