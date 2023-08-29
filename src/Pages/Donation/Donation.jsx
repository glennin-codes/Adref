import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaUser, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const DonationPage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (paymentMethod === "card") {
      // Handle card payment
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        // Send paymentMethod.id to your server
        // Here we just simulate a successful response
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
        }, 2000);
      }
    } else if (paymentMethod === "paypal") {
      // Handle PayPal payment
      // Here we just simulate a successful response
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000);
    } else if (paymentMethod === "mpesa") {
      // Handle M-Pesa payment
      // Here we just simulate a successful response
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000);
    }
  };

  return (
    <Box maxW="800px" mx="auto" p="4">
      <Heading as="h1" mb="4" textAlign="center">
        Donate to our cause
      </Heading>
      <Text mb="4" textAlign="center">
        Your donation will help us make the world a better place.
      </Text>
      <Box bg="white" p="4" boxShadow="lg" borderRadius="md">
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaMapMarkerAlt color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaPhone color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </InputGroup>
            <Input
              type="number"
              placeholder="Enter amount to donate"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
              <Stack direction="row">
                <Radio value="card">Credit Card</Radio>
                <Radio value="paypal">PayPal</Radio>
                <Radio value="mpesa">M-Pesa</Radio>
              </Stack>
            </RadioGroup>
            {paymentMethod === "card" && (
              <CardElement options={{ hidePostalCode: true }} />
            )}
            {error && (
              <Text color="red.500" fontSize="sm">
                {error}
              </Text>
            )}
            {success && (
              <Text color="green.500" fontSize="sm">
                Thank you for your donation!
              </Text>
            )}
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={loading}
              isDisabled={!stripe}
            >
              Donate
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default DonationPage;