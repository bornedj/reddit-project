import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from '../app/App';
import TileContainer, { selectPosts } from '../components/TileContainer/TileContainer';
require.extensions['.css'] = donothing;
require.extensions['.less'] = donothing;
require.extensions['.scss'] = donothing;

// setup for tests
global.document = jsdom({
   url: "http://localhost:3000"
 })

describe('testing selectPosts', () => {
   it("returns an array", () => {
      // act(() => {// test that the app renders on Reacts end
      //    ReactDOM.render(App,
      //       document.getElementById('root'))
      // });

      const result = selectPosts();
      expect(typeof(result.length)).to.equal("number")
   }) 
})