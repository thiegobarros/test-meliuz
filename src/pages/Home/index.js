import React, { Component } from 'react';
import {
    Title
} from './styles';
import Body from '../../components/Body';
import Card from '../../components/Card';

class Home extends Component {
    render() {
        return (
          <Body>
              <Title>Home</Title>
              <Card>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nec tellus vel pretium. In accumsan id augue eget porttitor. Nullam lacinia porttitor magna, aliquam maximus purus interdum et. Curabitur at euismod nisl. In at est sit amet velit tincidunt commodo vel vitae lacus. Donec a ultrices nisl. Fusce tristique enim ac dictum maximus. Donec eget sapien nisi. Pellentesque laoreet arcu aliquet ipsum mollis, id finibus risus consequat. Phasellus turpis felis, rutrum quis vehicula sollicitudin, porta nec turpis. Duis elementum, nunc in viverra efficitur, urna enim auctor velit, a consequat felis velit vitae enim. Cras porttitor mi id turpis cursus tempus. Duis non dictum nibh. Sed commodo, justo ac scelerisque tristique, nunc magna auctor mi, at convallis dolor enim sed nisi. Vestibulum vehicula velit a arcu elementum luctus. Nam mollis tempus tempus.</p>
              </Card>
          </Body>
        );
    }
}

export default Home;