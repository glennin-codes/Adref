import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';

const eventDetails = [
  { date: '12 October', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatibus.' },
  { date: '12 October', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatibus.' },
  { date: '12 October', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatibus.' },
];

const Events = () => {
  return (
    <Box className="events-container">
      <h2>Upcoming Events</h2>
      <Accordion allowMultiple>
        {eventDetails.map((event, index) => (
          <AccordionItem key={index}>
            <h3>
              <AccordionButton>
                <AccordionIcon  color="magenta"/>
                {event.date}
              </AccordionButton>
            </h3>
            <AccordionPanel>
              <p
              
              >{event.description}</p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default Events;
