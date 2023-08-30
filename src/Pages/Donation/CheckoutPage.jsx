import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import {FcMoneyTransfer} from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
const CheckoutPage = ({ amount }) => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [paymentOption, setPaymentOption] = useState("pesapal");
  const navigate=useNavigate()

  const handleBillingChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (value) => {
    setPaymentOption(value);
  };

  const handleCheckout = () => {
    // handle the checkout logic here
   navigate(
      '/pay',
   )
  };

  return (
    <Box p="10" maxW="1200px" mx="auto">
      <Heading as="h1" size="2xl" mb="10">
        Checkout
      </Heading>
      <SimpleGrid columns={[1, null, null, 3]} spacing="10">
        <Box>
          <Heading as="h2" size="lg" mb="5">
            Billing Details
          </Heading>
          <FormControl id="firstName" mb="3">
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              value={billingDetails.firstName}
              onChange={handleBillingChange}
              required
            />
          </FormControl>
          <FormControl id="lastName" mb="3">
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              value={billingDetails.lastName}
              onChange={handleBillingChange}
              required
            />
          </FormControl>
          <FormControl id="company" mb="3">
            <FormLabel>Company Name (optional)</FormLabel>
            <Input
              type="text"
              name="company"
              value={billingDetails.company}
              onChange={handleBillingChange}
            />
          </FormControl>
          <FormControl id="phone" mb="3">
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              name="phone"
              value={billingDetails.phone}
              onChange={handleBillingChange}
              required
            />
          </FormControl>
          <FormControl id="email" mb="3">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleBillingChange}
              required
            />
          </FormControl>
          <FormControl id="message" mb="3">
            <FormLabel>Message (optional)</FormLabel>
            <Textarea
              name="message"
              value={billingDetails.message}
              onChange={handleBillingChange}
            />
          </FormControl>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb="5">
            Your Donation
          </Heading>
          <Flex align="center" justify="center" direction="column" p="5" bg="#f0f0f0" borderRadius="md">
            <Image src="/donation.png" alt="Donation Symbol" w="100px" h="100px" mb="5"/>
            <Text fontSize="2xl">Total:</Text>
            <Text fontSize="4xl">KSH {amount}</Text>
          </Flex>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb="5">
            Payment Options
          </Heading>
          <RadioGroup value={paymentOption} onChange={handlePaymentChange}>
            <Stack spacing={10}>
              <Radio value="bank">Direct Bank Transfer</Radio>
              <Radio value="jambopay">Jambopay</Radio>
              <Radio value="pesapal">Pesapal</Radio>
            </Stack>
          </RadioGroup>
          {paymentOption === "pesapal" && (
            <>
              <Flex align="center" justify="space-between" mt="10">
                <Icon as={FaCcVisa} w={8} h={8} color="#1a1f71" />
                <Icon as={FaCcMastercard} w={8} h={8} color="#eb001b" />
                <Icon as={FcMoneyTransfer} w={8} h={8} color="#00aa4f" />
              </Flex>
              <Text mt="5">
                Pay using Pesapal gateway. You can pay either with credit/debit
                card or use mobile money payment options such as Mpesa,
                AirtelMoney, MTN Money, etc.
              </Text>
            </>
          )}
          <Checkbox mt="10" mb="5">
            I have read and agree to the{" "}
            <Text as="a" href="/terms-and-conditions" color="blue.500">
              terms and conditions
            </Text>
          </Checkbox>
          <Button
            colorScheme="blue"
            size="lg"
            w="100%"
            onClick={handleCheckout}
          >
            Proceed to {paymentOption}
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default CheckoutPage;