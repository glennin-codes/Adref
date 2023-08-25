import React from "react";
import { Box, Container, Grid, Image, Img, List, ListIcon, ListItem, OrderedList, Text } from "@chakra-ui/react";
import ServiceList from "./ServiceList";


const imageStyle = {
  width: "100%",
  marginRight:2,
  paddingRight:2,
  
  "@media (max-width: 600px)": {
    width: "100%",
   
    objectFit:"cover",
    marginRight: "0",
    marginBottom: "8px", // Adjust this value as needed
  },
};

const contentStyle = {
  textAlign: "left", // Default for desktop

  "@media (max-width: 600px)": {
    textAlign: "center", // Centered on mobile
  },
};

const AboutUs = () => {
  return (
    <Box
    sx={{
      m:6,

    }}
    >
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", }} gap={2} >
        {/* Image */}
        <Grid item xs={12} md={6} lg={3}
        sx={{
          mb:{
            base:"10"
          }
        }}
        xLg={2}
        position='relative'
    >
          <Img
          sx={{
            borderRadius:"lg",
            boxShadow:"lg",
             height:{
              base:"100%",
              sm:"80%",
              md:"70%",
              lg:"70%"
               
             },
             objectFit:"fit"
            
          }}
            src="images/Team.webp"
            alt="About Us"
            style={imageStyle}
          />
          <Text fontStyle="italic" mt="0" color="gray.600"
           sx={{
            position:"absolute",
            padding:"20px",
            top:{
              base:"85%",
              sm:"80%",
              md:"60%",
              lg:"70%"
            }

           }}
          >
        ~Adref executive Team #National Council of NGOs Summit {" "}
        Empowering Organizations and Citizen in Kenya.
        
      </Text>

        </Grid>

        {/* Content */}
        <Grid item xs={12} md={6}
        m={4}
        >
          <div style={contentStyle}>
          <div style={{ textAlign: 'center' }}>
  <Text fontSize="2xl" fontWeight="bold" marginBottom="1rem">
    ABOUT US
  </Text>
</div>
<Text fontSize="lg" textAlign="left" marginBottom="2rem"
fontFamily='poppins'
>
  <p>
    Africa Disaster Management ADREF - We are a non-governmental foundation
    based in Nairobi, Kenya. The organization was registered in 2019 under
    cap 164 act in the Ministry of Land and later with the NGO board. We are
    fully involved in disaster risk reduction across various sectors. The
    organization has also partnered with the government on different projects
    related to disaster risk management, peace and security, climate change,
    environmental conservation, food security, waste management, and poverty
    alleviation, aiming to tackle poverty, ignorance, and disease.
  </p>
  <p>
    The core idea behind Africa Disaster Management is to address the issue
    of severe poverty in marginalized communities within the country. We
    collaborate with other partners and stakeholders, targeting projects that
    are focused on eradicating poverty. By doing so, our foundation aims to
    uplift not only Kenyans but Africans as a whole, striving to improve
    living standards and well-being.
  </p>
</Text>


            <Text
            fontFamily='Montserrat ,sans-serif'
              fontSize="xl"
              fontWeight="bold"
              marginBottom="1rem"
              marginTop="2rem"
            >
              OUR VISION
            </Text>
            <Text fontSize="lg"
            fontFamily='poppins'
            >
              To be the NGO organization leading in disaster Risk management,
              Response, Emergency and Provision for Peace.
            </Text>

            <Text
            fontFamily='Montserrat ,sans-serif'
              fontSize="xl"
              fontWeight="bold"
              marginBottom="1rem"
              marginTop="2rem"
            >
              OUR MISSION
            </Text>
            <Text fontSize="lg"
            fontFamily='poppins'
            >
              To build national disaster risk management in order to protect
              people, Environment, Economy and climate change adaptation
              capabilities with our partners and coordinate response and
              recovery operations.
            </Text>

            <Text

            fontFamily='Montserrat ,sans-serif'
              fontSize="xl"
              fontWeight="bold"
              marginBottom="1rem"
              marginTop="2rem"
            >
              OUR CORE VALUES
            </Text>
            <Text fontSize="lg"
            fontFamily='poppins'
            >
            <List>
              <li>Integrity</li>
              <li>Transparency</li>
              <li>Creativity</li>
              <li>Accountability</li>
              <li>Professionalism</li>
              <li>Team work</li>
              <li>Respect for human right & Dignity</li>
            </List>
            </Text>

            <Text
            fontFamily='Montserrat ,sans-serif'
              fontSize="xl"
              fontWeight="bold"
              marginBottom="1rem"
              marginTop="2rem"
            >
              ORGANIZATION OBJECTIVES
            </Text>
            <Text fontSize="lg"
            fontFamily='poppins'
            >
         <ServiceList/>

            </Text>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
