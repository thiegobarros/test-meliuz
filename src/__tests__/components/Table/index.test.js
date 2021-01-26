import { shallow } from 'Src/enzyme';
import Table from 'Src/components/Table';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});



describe('Table Component', ()=>{

  it('verify is component exists', async () => {

    const wrapper = shallow(
        <Provider store={store}>
            <Table />
    </Provider>);

    expect(wrapper.exists()).toBeTruthy();
  });


});
