import './sass/App.scss';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <Nav />
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
                <h1 className='display-1'>Hello World!</h1>
            </div>
        </>
    );
}

export default App;
