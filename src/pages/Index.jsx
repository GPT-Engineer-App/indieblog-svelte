import { Box, Button, Container, Heading, Image, Input, Link, Stack, Text, Textarea } from "@chakra-ui/react";
import { FaEnvelope, FaComment, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., send email)
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="2xl" mb={8} color="gray.800">
        My IndieWeb Blog
      </Heading>

      {/* Featured Post */}
      <Box mb={12} p={6} bg="gray.50" rounded="lg" shadow="md">
        <Heading size="xl" mb={4} color="gray.700">
          <Link href="/post/featured">Featured Post Title</Link>
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nisi in leo aliquam fringilla ac non magna. Sed euismod, nulla sit amet aliquam lacinia...
        </Text>
        <Link href="/post/featured" color="blue.500">
          Read more <FaArrowRight style={{ display: "inline" }} />
        </Link>
      </Box>

      {/* Recent Posts */}
      <Heading as="h2" size="xl" mb={8} color="gray.700">
        Recent Posts
      </Heading>
      <Stack spacing={8} mb={12}>
        {[1, 2, 3].map((post) => (
          <Box key={post} p={6} bg="gray.50" rounded="lg" shadow="md">
            <Heading size="lg" mb={4} color="gray.700">
              <Link href={`/post/${post}`}>Post Title {post}</Link>
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nisi in leo aliquam fringilla ac non magna...
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Link href={`/post/${post}#comments`}>
                <FaComment /> 5 Comments
              </Link>
              <Link href={`/post/${post}`} color="blue.500">
                Read more <FaArrowRight style={{ display: "inline" }} />
              </Link>
            </Stack>
          </Box>
        ))}
      </Stack>

      {/* About Me */}
      <Heading as="h2" size="xl" mb={8} color="gray.700">
        About Me
      </Heading>
      <Box mb={12}>
        <Image src="https://images.unsplash.com/photo-1531986733711-de47444e8cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwc21pbGluZyUyMG1hbnxlbnwwfHx8fDE3MTA1ODc5ODR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Author" rounded="full" w={32} h={32} mb={4} />
        <Text fontSize="lg" color="gray.600">
          Hi, I'm John Doe, a passionate blogger sharing my thoughts on technology, web development, and personal growth. Welcome to my IndieWeb blog!
        </Text>
      </Box>

      {/* Contact Form */}
      <Heading as="h2" size="xl" mb={8} color="gray.700">
        Contact Me
      </Heading>
      <Box mb={12} p={6} bg="gray.50" rounded="lg" shadow="md">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Input placeholder="Your Name" size="lg" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="Your Email" size="lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Textarea placeholder="Your Message" size="lg" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <Button type="submit" size="lg" colorScheme="blue" leftIcon={<FaEnvelope />}>
              Send Message
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Index;
