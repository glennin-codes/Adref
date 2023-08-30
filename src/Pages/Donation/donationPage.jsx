import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionHeading = motion(Heading);

const DonationPage = () => {
  const [amount, setAmount] = useState("");
const navigate=useNavigate()
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDonation = (e) => {
    // handle the submission logic here
    // redirect to a checkout page
  // Event.preventDefault();
if(amount){

  navigate(
    `/checkout/${
      amount 
    }`
  )
  }
  
  }
  return (
    <Box>
      <Flex
        align="center"
        justify="center"
        direction="column"
        bgImage="url(https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VueWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
        bgSize="cover"
        bgPosition="center"
        h="500px"
      >
        <MotionHeading
          as="h1"
          size="4xl"
          color="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          DONATE
        </MotionHeading>
        <Text fontSize="2xl" color="white" fontWeight="bold">
          Support Our Programs
        </Text>
      </Flex>
      <Box p="10" maxW="600px" mx="auto">
        <Heading as="h2" size="lg" mb="5">
          Enter Your Donation Here
        </Heading>
        <InputGroup size="lg" mb="5">
          <InputLeftAddon children="KSH" />
          <Input
          required
            type="number"
            placeholder="e.g. 1000"
            value={amount}
            onChange={handleAmountChange}
          />
        </InputGroup>
        <Button
        type="submit"
          colorScheme="blue"
          size="lg"
          w="100%"
          onClick={handleDonation}
         disabled={
          amount?false:true
         }
        >
          Make a Donation
        </Button>
      </Box>
    </Box>
  );
};

export default DonationPage;