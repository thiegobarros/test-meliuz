import { shallow } from 'Src/enzyme';
import App from 'Src/App';

describe('App.js', ()=>{

  it('verify is component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });


  it('verify childrens components', () => {
    const wrapper = shallow(<App />);
  
    expect(wrapper.find('Provider')).toHaveLength(1);
    expect(wrapper.find('BrowserRouter')).toHaveLength(1);
    expect(wrapper.find('Routes')).toHaveLength(1);
  });

});

