import React from 'react';
import Navbar from './components/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
// import axios from 'axios'
import './App.css';

class App extends React.Component {
    // state = {
    //     users: [],
    //     loading: false
    // }
    // async componentDidMount() {
    //     this.setState({ loading: false });

    //     const res = await axios.get('https://api.github.com/users');

    //     this.setState({ users: res.data, loading: false })
    //     console.log(res.data)
    // }

    render() {
        return (
            <div className="App">
                <Navbar title={""} />
                <div className="container">
                    <Search />
                    <Users />
                </div>
            </div>
        )
    }
}

export default App;