import { Text, List, ListItem, ListIcon, OrderedList } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const services = [
  'Relief and Humanitarian support.',
  'Disaster and Risk management',
  'Emergencies such as Drought, Floods, Food security, Landslide, Fire & Accidents',
  'Peace & Security',
  'Climate change',
  'Health & Virus Research',
  'Environmental Conservation',
  'Environmental protection',
  'Sustainable development',
  'Socio-economic empowerment of the people',
  'Sustainability in agricultural sector',
  'Gender based Violence',
  'Waste management',
];

const ServiceList = () => (
  <List spacing={2} fontSize="lg">
    {services.map((service, index) => (
      <ListItem key={index}>
        <ListIcon as={CheckCircleIcon} color="magenta" fontSize="1.5rem" />
        {service}
      </ListItem>
    ))}
  </List>
);



export default ServiceList;
