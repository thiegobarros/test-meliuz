import { shallow } from 'Src/enzyme';
import Home from 'Src/pages/Home';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});



describe('Home Component', ()=>{

  it('verify is component exists', async () => {

    const wrapper = shallow(
        <Provider store={store}>
            <Home />
    </Provider>);

    expect(wrapper.exists()).toBeTruthy();
  });

});
